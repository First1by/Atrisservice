import React from 'react';
import Slider from './Components/slider/Slider';
import Player from './Components/player/Player';
import './main.css';

function Main() {
  return (
    <main>
      <section className="bg-section">
        <h1>Main page</h1>
        <Slider />
      </section>
      <section>
        <Player />
      </section>
    </main>
  );
}

export default Main;
