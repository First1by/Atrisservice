import { Link } from 'react-router-dom';
import './notfoundpage.css';

const Notfoundpage = () => {
  return (
    <section className="section-error-404">
      <h1>404</h1>
      <h2>Страница не найдена</h2>
      <p>Извините, но такой страницы нет на нашем сайте. Возможно вы ввели неправильный адрес.</p>
      <div className="button-back">
        <Link to="/">Перейти на главную</Link>
      </div>
    </section>
  );
};

export default Notfoundpage;
