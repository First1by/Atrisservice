import React from 'react';
import { useEffect } from 'react';
import './illustration.css';
import data from './data';
// import { NativeSyntheticEvent } from 'react-native';

// const canvasWrapper = document.querySelector('.canvas-wrapper') as HTMLElement;

const Illustration = () => {
  const [area, setArea] = React.useState(0);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [coord, setCoord] = React.useState(data);

  function onMove(e: React.MouseEvent<HTMLElement>): void {
    if (e.currentTarget) {
      for (let i = 0; i < coord.length; i++) {
        if (
          (e.nativeEvent.offsetX > coord[i].x1 &&
            e.nativeEvent.offsetX < coord[i].x2 &&
            e.nativeEvent.offsetY > coord[i].y1 &&
            e.nativeEvent.offsetY < coord[i].y2) ||
          (e.nativeEvent.offsetX > 86 &&
            e.nativeEvent.offsetX < 222 &&
            e.nativeEvent.offsetY > 288 &&
            e.nativeEvent.offsetY < 337)
        ) {
          setArea(coord[i].id);
          break;
        } else {
          setArea(0);
        }
      }
    }
  }

  const touchStart = (e: React.TouchEvent<HTMLElement>): void => {
    if (e.currentTarget instanceof HTMLElement) {
      if (
        e.changedTouches[0].screenX > 5 &&
        e.changedTouches[0].screenX < 164 &&
        e.changedTouches[0].screenY > 195 &&
        e.changedTouches[0].screenY < 268
      ) {
        setArea(1);
      } else if (
        e.changedTouches[0].screenX > 230 &&
        e.changedTouches[0].screenX < 490 &&
        e.changedTouches[0].screenY > 245 &&
        e.changedTouches[0].screenY < 295
      ) {
        setArea(2);
      } else if (
        e.changedTouches[0].screenX > 210 &&
        e.changedTouches[0].screenX < 490 &&
        e.changedTouches[0].screenY > 145 &&
        e.changedTouches[0].screenY < 245
      ) {
        setArea(3);
      } else {
        setArea(0);
      }
    }
  };

  const img1 = document.querySelector('.img1') as HTMLElement;
  const img2 = document.querySelector('.img2') as HTMLElement;
  const img3 = document.querySelector('.img3') as HTMLElement;
  const images = document.getElementsByTagName('img') as HTMLCollectionOf<HTMLImageElement>;

  useEffect(() => {
    switch (area) {
      case 1:
        img1.style.zIndex = '2';
        break;
      case 2:
        img2.style.zIndex = '3';
        break;
      case 3:
        img3.style.zIndex = '4';
        break;

      default:
        for (let i = 0; i < images.length; ++i) {
          images[i].style.zIndex = '1';
        }

        console.log('clear');
        break;
    }
  });

  return (
    <div className="canvas-wrapper" onMouseMove={onMove} onTouchStart={touchStart}>
      <h2>
        Выберите необходимую деталь для ремонта <span>Узнай стоимость</span>
      </h2>
      <div className="img1-text" data-title="Лонжероны от 300 руб">
        <img className="img1" src="/img/illustration/img1-longeron.png" alt="" />
      </div>
      <img className="img2" src="/img/illustration/img2-porog.png" title="Пороги от 150 руб" alt="" />
      <img className="img3" src="/img/illustration/img3-dno.png" title="Днище от 50 руб" alt="" />
      <img className="img4" src="/img/illustration/img4-stakan.png" title="Стаканы от 200 руб" alt="" />
      <img className="img5" src="/img/illustration/img5-zad-krylo.png" title="Крыло заднее от 130 руб" alt="" />
      <img className="img6" src="/img/illustration/img6-bagazh.png" title="Днище багажника от 80 руб" alt="" />
      <img className="img-main" src="/img/illustration/img-original.png" alt="" />
    </div>
  );
};

export default Illustration;
