import React from 'react';
import useDrag from './useDrag';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import { data } from './data';
import './scrollbar.css';

import { Card } from './Card';
import { LeftArrow, RightArrow } from './arrows';

// NOTE: for hide scrollbar
import './hideScrollbar.css';
// import "./firstItemMargin.css";

type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

const getItems = () =>
  Array(30)
    .fill(0)
    .map((_, ind) => ({ id: data[ind].img }));

export default function Scrollbar() {
  const [items] = React.useState(getItems);

  // NOTE: for drag by mouse
  const { dragStart, dragStop, dragMove, dragging } = useDrag();
  const handleDrag =
    ({ scrollContainer }: scrollVisibilityApiType) =>
    (ev: React.MouseEvent) =>
      dragMove(ev, (posDiff) => {
        if (scrollContainer.current) {
          scrollContainer.current.scrollLeft += posDiff;
        }
      });

  const [selected, setSelected] = React.useState<string>('');
  const handleItemClick = (itemId: string) => () => {
    if (dragging) {
      return false;
    }
    setSelected(selected !== itemId ? itemId : '');
  };

  return (
    <>
      <div className="wrapper-scrollbar" onMouseOver={onOver} onMouseOut={onOut}>
        <h3 className="works">Мы осблуживаем</h3>
        <div onMouseLeave={dragStop} className="thescroll">
          <ScrollMenu
            LeftArrow={LeftArrow}
            RightArrow={RightArrow}
            // onWheel={onWheel}
            onMouseDown={() => dragStart}
            onMouseUp={() => dragStop}
            onMouseMove={handleDrag}
          >
            {items.map(({ id }) => (
              <Card title={id} key={id} onClick={handleItemClick(id)} selected={id === selected} />
            ))}
          </ScrollMenu>
        </div>
      </div>
    </>
  );
}

// const scrollBarDiv = document.querySelector('.wrapper-scrollbar') as HTMLElement;

function onOver(e: React.MouseEvent<HTMLElement>): void {
  if (e.currentTarget instanceof HTMLElement) {
    // window.onscroll = () => window.scroll(0, 0);
    // document.body.style.position = 'fixed';
    // document.body.style.overflowY = 'hidden';
  }
  console.log('onOver');
}

function onOut(e: React.MouseEvent<HTMLElement>): void {
  if (e.currentTarget instanceof HTMLElement) {
    // window.onscroll = () => '';
    // document.body.style.position = 'static';
    // document.body.style.overflowY = 'auto';
    console.log('onOut');
  }
}

// function onWheel(apiObj: scrollVisibilityApiType, ev: React.WheelEvent): void {
//   const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

//   if (isThouchpad) {
//     ev.stopPropagation();
//     return;
//   }

//   if (ev.deltaY < 0) {
//     apiObj.scrollNext();
//   } else if (ev.deltaY > 0) {
//     apiObj.scrollPrev();
//   }
// }
