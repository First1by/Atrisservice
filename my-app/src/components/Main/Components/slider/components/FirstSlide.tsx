import './slides.css';

export default function FirstSlide() {
  return (
    <div
      className="right-banner"
      style={{
        transition: 'all 1s linear',
      }}
    >
      <div className="info-block">
        <h2>Первый сварной</h2>
        <p>Эксперт в области автомобильных сварочных работ</p>
      </div>
      <button className="podrobnee">Подробнее</button>
    </div>
  );
}
