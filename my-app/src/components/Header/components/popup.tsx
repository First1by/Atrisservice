import './popup.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
function Popup() {
  const form = useRef(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs.sendForm('service_e8g9r2j', 'template_3da05r7', form.current!, '3czTbEdzkuv5-Hj3s').then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset();
  };
  return (
    <div className="popup-container">
      <form className="form" ref={form} onSubmit={sendEmail} action="mailto:html@yandex.ru" encType="text/plain">
        <label className="input-label">
          <span className="input-title">Ваше имя</span>
          <input className="input" type="text" name="user_name" required />
        </label>
        <label className="input-label">
          <span className="input-title">Ваш Email</span>
          <input className="input" type="text" name="user_email" required />
        </label>
        <label className="input-label">
          <span className="input-title">Сообщение</span>
          <textarea className="input" name="message" required />
        </label>
        <button className="button button-orange" type="submit">
          Отправить
        </button>
      </form>
    </div>
  );
}

export default Popup;
