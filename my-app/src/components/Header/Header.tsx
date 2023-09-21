import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Popup from './components/popup';
import './header.css';

function Header() {
  const [popupVisible, setPopupVisible] = useState<boolean>(false);

  function togglePopup() {
    setPopupVisible(!popupVisible);
  }

  const closePopup = (): void => {
    togglePopup();
  };

  window.onclick = (e) => {
    if (e.target instanceof HTMLElement) {
      if (!e.target.closest('.popup-container') && !e.target.closest('.do-form') && !e.target.closest('.byeForm')) {
        setPopupVisible(false);
      }
    }
  };

  return (
    <header className="header">
      <div className="navigator">
        <nav>
          <ul className="menu">
            <li className="menu-point ">
              <NavLink className="App-link btn-effect" to="/services">
                Услуги
              </NavLink>
            </li>
            <li className="menu-point">
              <NavLink className="App-link btn-effect" to="/promo">
                Акции
              </NavLink>
            </li>

            <li className="menu-point">
              <NavLink className="App-link btn-effect" to="/price">
                Цены
              </NavLink>
            </li>

            <li className="menu-point">Отзывы</li>
            <li className="menu-point">
              <NavLink className="App-link btn-effect" to="/about">
                О компании
              </NavLink>
            </li>
            <li className="menu-point btn-effect">Контакты</li>
            <li className="menu-point">
              <NavLink className="App-link" to="tel:+375296384455">
                +375 (29) 377-14-40
              </NavLink>
            </li>
          </ul>
        </nav>
        <button onClick={togglePopup} className="do-form">
          Оставить заявку
        </button>
      </div>
      <div className="banner">
        <NavLink to="/">
          <img src="./img/logo.png " alt="Первый Сварной" title="На главную" />
        </NavLink>
        <h1 className="logo">
          Первый <span className="svarnoy">Сварной</span>
        </h1>
        <div className="contacts">
          <NavLink className="App-link nav-tel" to="tel:+375296384455">
            +375 29 377-14-40
          </NavLink>
          <NavLink className="App-link nav-tel" to="tel:+375336384455">
            +375 33 377-14-40
          </NavLink>
          <div className="working-hours">
            <span className="time-text">пн-пт 08:00–17:00; сб 10:00–17:00</span>
          </div>
        </div>
        <div className="adress-container">
          <div className="adress">г.Минск, ул. Петруся Бровки, 30/11 </div>
          <div className="social-elements"></div>
        </div>
        <div className="location">Схема проезда</div>
      </div>
      {popupVisible ? <Popup close={closePopup} /> : ''}
    </header>
  );
}

export default Header;
