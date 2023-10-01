import './slides.css';

export default function ThirdSlide() {
  return (
    <div className="slide-banner-container">
      <div className="slide-banner">
        <div className="info-block">
          <h2>Ежедневные отчеты работ</h2>
          <p>Сварка – это наше искусство</p>
        </div>
        <button className="do-form">Подробнее</button>
      </div>
      <div className="right-banner">
        <div className="flex-collage">
          <div className="photo-card">
            <img src="/img/slider/photo1.jpg" alt="photo" />
          </div>
          <div className="photo-card">
            <img src="/img/slider/photo2.jpg" alt="photo" />
          </div>
          <div className="photo-card">
            <img src="/img/slider/photo3.jpg" alt="photo" />
          </div>
          <div className="photo-card">
            <img src="/img/slider/photo4.jpg" alt="photo" />
          </div>
          <div className="photo-card">
            <img src="/img/slider/photo5.jpg" alt="photo" />
          </div>
          <div className="photo-card">
            <img src="/img/slider/photo6.jpg" alt="photo" />
          </div>
        </div>
      </div>
    </div>
  );
}
