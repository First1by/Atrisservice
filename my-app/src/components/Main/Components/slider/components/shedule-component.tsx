import './slides.css';

export default function SheduleSlide() {
  return (
    <div className="container-shedule">
      <div className="title-shedule">
        <div className="clock-image">
          <img src="img/icons/icon-clock.png" alt="task" width="32px" height="32px" />
        </div>
        <div className="text-title">Время работы</div>
      </div>
      <div className="time-shedule">
        <div>
          <div className="day-shedule">Понедельник</div>
          <div className="clock-shedule">09:00 - 17:00</div>
        </div>
        <div>
          <div className="day-shedule">Вторник</div>
          <div className="clock-shedule">09:00 - 17:00</div>
        </div>
        <div>
          <div className="day-shedule">Среда</div>
          <div className="clock-shedule">09:00 - 17:00</div>
        </div>
        <div>
          <div className="day-shedule">Четверг</div>
          <div className="clock-shedule">09:00 - 17:00</div>
        </div>
        <div>
          <div className="day-shedule">Пятница</div>
          <div className="clock-shedule">09:00 - 17:00</div>
        </div>
        <div>
          <div className="day-shedule">Суббота</div>
          <div className="clock-shedule">10:00 - 17:00</div>
        </div>
        <div>
          <div className="day-shedule">Воскресенье</div>
          <div className="clock-shedule">Выходной</div>
        </div>
      </div>
      <div className="lunch-shedule">Без обеда</div>
    </div>
  );
}
