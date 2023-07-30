import React from 'react';
import Slider from './Components/slider/Slider';
import Player from './Components/player/Player';
import './main.css';
import Cards from './Components/card/Card';
import Company from './Components/company/Company';

function Main() {
  return (
    <main>
      <section className="bg-section">
        <Slider />
      </section>
      <section className="our-works">
        <Player />
      </section>
      <section>
        <Cards />
      </section>
      <section className="company">
        <Company />
      </section>
    </main>
  );
}

export default Main;
