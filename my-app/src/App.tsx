import Header from 'components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Main from 'components/Main/Main';
import Footer from 'components/Footer/Footer';
import Aboutpage from 'pages/Aboutpage';
import Notfoundpage from 'pages/Notfoundpage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/about" element={<Aboutpage />}></Route>
        <Route path="*" element={<Notfoundpage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
