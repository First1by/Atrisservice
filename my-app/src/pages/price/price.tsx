import './price.css';

export default function Price() {
  return (
    <section className="promo section-bg-color">
      <div className="price-container">
        <h1 className="elementor-heading-title elementor-size-default">ЦЕНЫ НА УСЛУГИ</h1>

        <div className="">
          <strong>Автосервисный комплекс «Первый сварной»</strong> оказывает полный спектр услуг по диагностике, ремонту
          и обслуживанию легковых автомобилей, минивэнов, кроссоверов, внедорожников и микроавтобусов. Услуги мы
          оказываем качественно, на профессиональном и современном оборудовании Вам представлена таблица цен
          (прейскурант) на ряд наших услуг. Подробнее уточнить цену ремонта именно вашего автомобиля вы можете по
          номерам нашего Автосервиса.
        </div>
        <h2>Перечень услуг нашего автосервиса:</h2>
        <table>
          <thead>
            <tr>
              <th>Популярные</th>
              <th>Цены</th>{' '}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Замена масла в двигателе</td>
              <td>от 15 руб</td>
            </tr>
            <tr>
              <td>Проточка тормозных дисков</td>
              <td>от 40 руб</td>
            </tr>
            <tr>
              <td>Замена тормозных колодок</td>
              <td>от 25 руб</td>
            </tr>
            <tr>
              <td>Замена тормозных дисков</td>
              <td>от 50 руб</td>
            </tr>
            <tr>
              <td>Замена ГРМ</td>
              <td>от 80 руб</td>
            </tr>
            <tr>
              <td>Шиномонтаж</td>
              <td>от 10 руб</td>
            </tr>
            <tr>
              <td>Замена амортизатора</td>
              <td>от 30 руб</td>
            </tr>
            <tr>
              <td>Замена рулевой тяги</td>
              <td>от 15 руб</td>
            </tr>
            <tr>
              <td>Замена рулевого наконечника</td>
              <td>от 10 руб</td>
            </tr>
            <tr>
              <td>Замена комплекта сцепления</td>
              <td>от 120 руб</td>
            </tr>
            <tr>
              <td>Замена шаровой опоры</td>
              <td>от 15 руб</td>
            </tr>
            <tr>
              <td>Замена рычага подвески</td>
              <td>от 25 руб</td>
            </tr>
            <tr>
              <td>Замена тяги стабилизатора</td>
              <td>от 10 руб</td>
            </tr>
            <tr>
              <td>Замена фильтров </td>
              <td>от 5 руб</td>
            </tr>
          </tbody>
        </table>
        <div className="button-div">
          <button className="do-form">Записаться на ремонт</button>
        </div>
      </div>
    </section>
  );
}
