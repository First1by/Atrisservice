import './reviews.css';

export default function Reviews() {
  return (
    <div className="reviews-container">
      <h1>Отзывы о компании &laquo;Первый Сварной&raquo;</h1>
      <p>
        Мы очень заинтересованы в выстраивании доброго и взаимовыгодного сотрудничества с нашими клиентами. И всегда
        настроены на урегулирование любых спорных вопросов, так как основа нашего бизнеса это{' '}
        <strong>ВЫ – наши клиенты! </strong>{' '}
      </p>
      <p>
        <strong>Мы всегда готовы услышать ваши конструктивные отзывы</strong>, как положительные так и рассмотреть
        замечания к нашей работе! Оставьте ваш отзыв, это помогает делать наш бизнес лучше!
      </p>
      <div
        className="reviews"
        style={{
          width: '750px',
          height: '1000px',
          overflow: 'hidden',
          position: 'relative',
          maxWidth: '100%',
        }}
      >
        <iframe
          style={{
            width: '100%',
            height: '100%',
            border: '1px solid #e6e6e6',
            borderRadius: '8px',
            boxSizing: 'border-box',
          }}
          src="https://yandex.ru/maps-reviews-widget/120033510349?comments"
        ></iframe>
        <a
          href="https://yandex.by/maps/org/pervy_svarnoy/120033510349/"
          target="_blank"
          style={{
            display: 'block',
            padding: '10px 10px',
            width: '150px',
            maxHeight: '40px',
            position: 'absolute',
            bottom: '8px',
            left: 'calc(50% - (150px / 2))',
            boxSizing: 'border-box',
            textDecoration: 'none',
            color: '#198cff',
            fontSize: '14px',
            fontFamily: 'YS Text,sans-serif',
            textAlign: 'center',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            backgroundColor: '#f5f7fa',
            borderRadius: '5px',
          }}
          rel="noreferrer"
        >
          Больше отзывов
        </a>
      </div>
    </div>
  );
}
