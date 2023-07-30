import YMap from 'components/Main/Components/map/Map';
import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="section">
        <div className="container">
          <div className="contacts">
            <h2 className="contacts">Контакты</h2>
          </div>
          <div className="ymap">
            <YMap />
          </div>
        </div>
        <div className="rights">Copyright © 2023 - 2024 ООО {'Вагцентрсервис'} УНП: 692188122</div>
      </div>
    </footer>
  );
}

export default Footer;
