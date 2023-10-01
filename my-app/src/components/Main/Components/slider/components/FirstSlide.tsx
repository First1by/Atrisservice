import SheduleSlide from './shedule-component';
import './slides.css';
import './shedule.css';

export default function FirstSlide() {
  return (
    <div className="slide-banner-container">
      <div className="slide-banner">
        <div className="info-block">
          <h2>
            Первый <span>сварной</span>
          </h2>
          <p>Эксперт в области автомобильных сварочных работ</p>
        </div>
        <button className="do-form">Подробнее</button>
        <div className="flex-icons">
          <a href="https://www.instagram.com/pervi_svarnoi/" rel="noreferrer" target="_blank">
            <img src="/img/icons/instagram.png" alt="instagram" />
          </a>
          <a href="https://www.tiktok.com/@pervij_svarnoj" rel="noreferrer" target="_blank">
            <img src="/img/icons/tiktok.png" alt="tiktok" />
          </a>
          <a href="https://vk.com/pervijsvarnoj" target="_blank" rel="noopener noreferrer">
            <img src="/img/icons/vk.png" alt="vk" />
          </a>
        </div>
      </div>
      <div className="right-banner">
        <SheduleSlide />
      </div>
    </div>
  );
}
