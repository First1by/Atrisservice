import { useEffect, useState } from 'react';
import './slider.css';
import data, { IPeople } from './data';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import FirstSlide from './components/FirstSlide';
import SecondSlide from './components/SecondSlide';
import ThirdSlide from './components/ThirdSlide';

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
    }, 5000000);
    return () => clearInterval(slider);
  }, [currentIndex]); // эффект срабатывает только при изменении currentIndex.

  return (
    <div className="main-slider">
      <div className="section-center">
        {people.map((person: IPeople, personIndex: number) => {
          const { id, image, name } = person;

          let position = 'nextSlide';
          if (personIndex === currentIndex) {
            position = 'activeSlide';
          }

          if (personIndex === currentIndex - 1 || (currentIndex === 0 && personIndex === people.length - 1)) {
            position = 'lastSlide';
          }

          return (
            <article className={`${position} container-slider`} key={id}>
              <div className="blackwindow"></div>
              <img src={image} alt={name} className="person-image" />
              {currentIndex === 0 ? (
                <FirstSlide />
              ) : currentIndex === 1 ? (
                <SecondSlide />
              ) : currentIndex === 2 ? (
                <ThirdSlide />
              ) : (
                ''
              )}
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
