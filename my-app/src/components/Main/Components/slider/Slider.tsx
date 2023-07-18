import { useEffect, useState } from 'react';
import './slider.css';
import data, { IPeople } from './data';
import { FaQuoteRight } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export default function Slider() {
  //Объявляем переменные состояния
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [people, setPeople] = useState(data);
  const [currentIndex, setCurrentIndex] = useState(0);
  // people - хранит состояние, setPeople - функция, которая позволяет менять значение people.
  // После изменения состояния, реакт делает повторный рендер, с новым значением people.

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (currentIndex < 0) {
      setCurrentIndex(lastIndex);
    }
    if (currentIndex > lastIndex) {
      setCurrentIndex(0);
    }
  }, [currentIndex, people]); // Эффект срабатывает только при изменении currentIndex, people.

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrentIndex(currentIndex + 1);
    }, 5000);
    return () => clearInterval(slider);
  }, [currentIndex]); // эффект срабатывает только при изменении currentIndex.

  return (
    <div className="main-slider">
      <div className="title">
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className="section-center">
        {people.map((person: IPeople, personIndex: number) => {
          const { id, image, name, title, quote } = person;

          let position = 'nextSlide';
          if (personIndex === currentIndex) {
            position = 'activeSlide';
          }

          if (personIndex === currentIndex - 1 || (currentIndex === 0 && personIndex === people.length - 1)) {
            position = 'lastSlide';
          }

          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className="person-image" width="200px" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}
        <button className="prev" onClick={() => setCurrentIndex((currentIndex) => currentIndex - 1)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => setCurrentIndex((currentIndex) => currentIndex + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </div>
  );
}
