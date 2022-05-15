import './App.css';
import Checkout from './component/checkout/Checkout';
import Header from './component/LandingPage/Header/Header';
import HeaderMain from './component/LandingPage/Header/HeaderMain';

import HomePage from './component/LandingPage/Header/HomePage';
import MenSeaction from './component/Men/MenSection';
import {BrowserRouter,Routes,Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      {/* <h1>Addidas</h1> */}
      {/* <HomePage/> */}
      {/* <MenSeaction/> */}

      <Header/>
      <HeaderMain />

      <Routes>

        <Route path='/' element={<HomePage />} />
        <Route path='/men' element={<MenSeaction/> }/>
        <Route path='/checkout' element={<Checkout />} />
        

      </Routes>
      

      {/* <Checkout/> */}
    </div>
  );
}

export default App;
