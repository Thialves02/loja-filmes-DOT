import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import GlobalStyle from './assets/styles/global'
import MenuLateral from "./components/MenuLateral/MenuLateral";
import Navbar from './components/Navbar/Navbar';
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
          <MenuLateral />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/checkout" element={<Checkout />}></Route>
          </Routes>
        </Router>
      </CtxApp>
    </>
  );
}

export default App;
