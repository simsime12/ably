import logo from './logo.svg';
import './App.css';
import Top from './container/Top';
import Body from './body/Body';
import Searchbtn from './search/Searchbtn';
import Slider from './slick/Slider';
import Category from './menu/Category';
import Shopping from './store/Shopping';
import Dct from './discount/Dct';
import Routesearch from './searchRoute/Routesearch';
import { BrowserRouter, Switch, Routes,  Route } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Top />
      <Searchbtn/>
      <Slider />
      <Category />
      <Dct />
      <Shopping />
    
    </div>
  );
}

export default App;
