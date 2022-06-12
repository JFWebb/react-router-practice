import './App.css';

// Import Depenedencies
import React from "react";
import {Route} from "react-router-dom";

// Import Components
import Nav from './components/Nav'

// Import Pages
import StocksPage from './pages/Stocks'
import MainPage from './pages/Main'
import PricePage from './pages/Prices'
import AboutPage from './pages/About';

// Import Data
// import stocks from './components/stock.data'

function App() {
  return (
    <div className="App">
      {/* since we want Nav at the top of all the pages, just add once here instead of adding into each page component */}
      <Nav />
      <Route exact path="/">
        <MainPage />
      </Route>
      <Route exact path="/about">
        <AboutPage />
      </Route>
      <Route path="/stocks">
        <StocksPage />
      </Route>
      <Route 
        path="/price/:symbol"
        render={(routerProps) => {
          return <PricePage {...routerProps} />
        }}
      />
    </div>
  );
}

export default App;
