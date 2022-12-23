import { ThemeProvider, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import './App.css';
import { Routes, Route } from "react-router-dom";
import { BusinessOwner } from './components/BusinessOwner/BusinessOwner';
import { HomePage } from './components/HomePage/HomePage';
import { Searcher } from './components/Searcher/Searcher';
import { Map } from './components/Map/Map';
import { CardsFeed } from './components/CardsFeed/CardsFeed';
import { LikedFeed } from './components/CardsFeed/LikedFeed';
import { FormElement } from './components/Form/Form';
import { HeaderSearcher } from './components/Header/HeaderSearcher';
import { PrivateRoutes } from './components/PrivateRoutes/PrivateRoutes';
import { SignUp } from './components/Log-in/SignUp';



function App() {


  // ================================= 


  return (
    <div className="App">
      <ThemeProvider
    breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
    minBreakpoint="xxs"
    > 
     <Routes>
              <Route path='/*' element={
              <HomePage />
              }></Route>
              <Route element={<PrivateRoutes />} >
                <Route path='/user/*' element={
                  <Searcher /> 
                }></Route>
                <Route path='/businessowner/*' element={
                  <BusinessOwner />
                }></Route>
              </Route>
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
