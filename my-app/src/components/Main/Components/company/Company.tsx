import Scrollbar from '../scrollbar/Scrollbar';
import './company.css';
function Company() {
  return (
    <div className="wrapper-company">
      <div className="blackwindow"></div>
      <h1>О компании</h1>
      <div className="content-company">
        <div className="card-image">
          <img src="./img/about-company/person-in-frame.png" alt="" />
        </div>
        <div className="description-block">
          <p>
            Машина плохо заводится? Аккумулятор вас подводит? Не проблема! Вам в «PRO Auto»! Мы подберём хороший,
            надёжный, а главное недорогой аккумулятор именно для вашего авто! С 1997 года сеть магазинов «PRO Auto»
            занимается продажей автомобильных аккумуляторов, масел, расходных материалов, химией и аксессуаров.
          </p>
          <button>Узнать больше</button>
        </div>
      </div>
      <Scrollbar />
    </div>
  );
}

export default Company;
