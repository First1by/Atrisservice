import { Link } from 'react-router-dom';
import './Notfoundpage.css';

const Notfoundpage = () => {
  return (
    <section className="error-404">
      <h1>404</h1>
      <h2>Страница не найдена</h2>
      <p>Извините, но такой страницы нет на нашем сайте. Возможно вы ввели неправильный адрес.</p>
      <div className="button">
        <Link to="/">Перейти на главную</Link>
      </div>
    </section>
  );
};

export default Notfoundpage;
