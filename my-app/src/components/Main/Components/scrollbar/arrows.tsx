import React from 'react';
import './scrollbar.css';

import { VisibilityContext } from 'react-horizontal-scrolling-menu';

function Arrow({
  children,
  disabled,
  onClick,
}: {
  children: React.ReactNode;
  disabled: boolean;
  onClick: VoidFunction;
}) {
  return (
    <button
      className="cursor-scrollbar"
      disabled={disabled}
      onClick={onClick}
      style={{
        margin: '10px',
        height: '20%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        cursor: 'pointer',
        right: '1%',
        opacity: disabled ? '0' : '1',
        userSelect: 'none',
        fontSize: '2.5em',
        fontFamily: 'Roboto, sans-serif',
        borderColor: 'transparent',
        background: 'none',
        color: 'white',
        transition: '0.2s linear',
        textShadow: '0 0 3px #000000, 0 0 3px darkred, 0 0 3px #f2edf7, 0 0 3px #dbd2e3',
      }}
    >
      {children}
    </button>
  );
}

export function LeftArrow() {
  const { isFirstItemVisible, scrollPrev, visibleElements, initComplete } = React.useContext(VisibilityContext);

  const [disabled, setDisabled] = React.useState(!initComplete || (initComplete && isFirstItemVisible));
  React.useEffect(() => {
    // NOTE: detect if whole component visible
    if (visibleElements.length) {
      setDisabled(isFirstItemVisible);
    }
  }, [isFirstItemVisible, visibleElements]);

  return (
    <Arrow disabled={disabled} onClick={() => scrollPrev()}>
      &lt;
    </Arrow>
  );
}

export function RightArrow() {
  const { isLastItemVisible, scrollNext, visibleElements } = React.useContext(VisibilityContext);

  // console.log({ isLastItemVisible });
  const [disabled, setDisabled] = React.useState(!visibleElements.length && isLastItemVisible);
  React.useEffect(() => {
    if (visibleElements.length) {
      setDisabled(isLastItemVisible);
    }
  }, [isLastItemVisible, visibleElements]);

  return (
    <Arrow disabled={disabled} onClick={() => scrollNext()}>
      &gt;
    </Arrow>
  );
}
