import './popup.css';
import '../../../pages/Notfoundpage/notfoundpage.css';

import InputMask from 'react-input-mask';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function Popup(props: { close: () => void }) {
  const form = useRef(null);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const sendEmail = () => {
    emailjs.sendForm('service_e8g9r2j', 'template_3da05r7', form.current!, '3czTbEdzkuv5-Hj3s').then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    // e.target.reset();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const minutes = 0.2;
    const now = new Date().getTime();
    const setupTime = localStorage.getItem('setupTime');
    if (setupTime == null) {
      localStorage.setItem('setupTime', now.toString());
    } else {
      debugger;
      if (Number(now) - Number(setupTime) > minutes * 60 * 1000) {
        localStorage.setItem('setupTime', now.toString());
        setTermsAccepted(true);
        sendEmail();
      }
    }
  };

  if (!termsAccepted) {
    return (
      <div className="popup-container">
        <form className="form" ref={form} onSubmit={handleSubmit} action="mailto:html@yandex.ru" encType="text/plain">
          <label className="input-label">
            <span className="input-title">Ваше имя</span>
            <input className="input" type="text" name="user_name" required />
          </label>
          <label className="input-label">
            <span className="input-title">Ваш номер телефона</span>
            <InputMask
              className="input"
              {...props}
              mask="+375\ 99 999 99 99"
              maskChar=" "
              placeholder="+375 (29) _ _ _  _ _  _ _"
            />
          </label>
          <label className="input-label">
            <span className="input-title">Сообщение</span>
            <textarea
              className="input"
              required
              name="message"
              rows={7}
              cols={33}
              placeholder="Ваше сообщение..."
            ></textarea>
          </label>
          <button className="button button-orange" type="submit">
            Отправить
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="popup-container">
      <div className="">
        <h2>Спасибо, ваша заявка принята</h2>
        <div>Наш менеджер свяжется с вами в ближайшее время</div>
      </div>
      <div className="button-back-to-main" onClick={props.close}>
        Перейти на главную
      </div>
    </div>
  );
}
export default Popup;
