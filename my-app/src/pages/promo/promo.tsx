import './promo.css';

export default function Promo() {
  return (
    <section className="promo section-bg-color">
      <div className="promo-container">
        <h2>Спецпредложения от &laquo;Первый Сварной&raquo;</h2>
        <div className="elementor-image">
          <a href="https://www.instagram.com/pervi_svarnoi/" rel="noreferrer" target="_blank">
            <img className="promo-image" src="img/promo/promo-pervij.jpg" alt="Скидка 10% подписчикам инстаграм" />
          </a>
        </div>
        <p>Скидка 10% подписчикам в Инстаграм</p>
      </div>
    </section>
  );
}
