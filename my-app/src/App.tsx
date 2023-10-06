import Header from 'components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Main from 'components/Main/Main';
import Footer from 'components/Footer/Footer';
import Aboutpage from 'pages/aboutPage/Aboutpage';
import Notfoundpage from 'pages/Notfoundpage/Notfoundpage';
import Services from 'pages/Services/Services';
import Promo from 'pages/promo/promo';
import Price from 'pages/price/price';
import Reviews from 'pages/reviews/Reviews';
import Blackout from 'components/Blackout';
import { useState } from 'react';

// const blackout = document.querySelector('.blackout') as HTMLElement;

function App() {
  //   const [blackoutVisible, setBlackoutVisible] = useState<boolean>(false);

  //   const closeBlackout = (): void => {
  //     setBlackoutVisible(true);
  //   };
  return (
    <div className="App">
      {/* {blackoutVisible ? <Blackout close={closeBlackout} /> : ''} */}
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/promo" element={<Promo />}></Route>
        <Route path="/price" element={<Price />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/reviews" element={<Reviews />}></Route>
        <Route path="/about" element={<Aboutpage />}></Route>
        <Route path="*" element={<Notfoundpage />} />
      </Routes>
      <Footer />
      {/* <div className="blackout"></div> */}
    </div>
  );
}

export default App;
