import React from 'react';
import './scrollbar.css';

export function Card({ title }: { title: string; key: string; onClick: () => false | undefined; selected: boolean }) {
  return (
    <div
      className="card"
      role="button"
      style={{
        margin: '0 10px',
        pointerEvents: 'none',
      }}
      tabIndex={0}
    >
      <img src={title} className="scrollbar-image" alt="avto" />
    </div>
  );
}
