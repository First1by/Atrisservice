import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

function Header() {
  return (
    <header className="header">
      <div className="navigator">
        <nav>
          <ul className="menu">
            <li className="menu-point ">
              <NavLink className="App-link btn4" to="/services">
                Услуги
              </NavLink>
            </li>
            <li className="menu-point">
              <NavLink className="App-link btn4" to="/discount">
                Акции
              </NavLink>
            </li>
            <li className="menu-point">Цены</li>
            <li className="menu-point">Отзывы</li>
            <li className="menu-point">
              <NavLink className="App-link btn4" to="/about">
                О компании
              </NavLink>
            </li>
            <li className="menu-point btn4">Контакты</li>
            <li className="menu-point">
              <NavLink className="App-link" to="tel:+375296384455">
                +375 (29) 377-14-40
              </NavLink>
            </li>
          </ul>
        </nav>
        <button className="do-form">Оставить заявку</button>
      </div>
      <div className="banner">
        <img src="./img/logo.png " alt="Первый Сварной" />
        <h1 className="logo">
          Первый <span className="svarnoy">Сварной</span>
        </h1>
      </div>
    </header>
  );
}

export default Header;
