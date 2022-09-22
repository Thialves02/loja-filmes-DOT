import { Route } from 'react-router-dom';
import { Router, Routes } from 'react-router-dom';
import './App.css';
import GlobalStyle from './assets/styles/global'
import CtxApp from './context/CtxApp';
import Checkout from './pages/Checkout/Checkout';
import Home from './pages/Home/Home';

function App() {
  return (
    <>
      <GlobalStyle />
      <CtxApp>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/checkout" element={<Checkout />}></Route>
          </Routes>
        </Router>
      </CtxApp>
    </>
  );
}

export default App;
