import React from 'react';
import { Fragment } from './Fragment'
import './App.css';

function App() {
  return (
    <div className="container">
      <header>Header</header>
      <main>
        <div className="main-column">
          <Fragment 
            id="fragment-module-one" 
            name="fragment-module-one" 
            url="/fragment/module-one/" 
          />
        </div>
        <div className="side-column">
          <div className="top">
            <Fragment 
              name="fragment-module-two" 
              id="fragment-module-two" 
              url="/fragment/module-two/" 
            />
          </div>
          <div className="bottom">
            <Fragment 
              name="fragment-module-three" 
              id="fragment-module-three" 
              url="/fragment/module-three/" 
            />
          </div>
        </div>
      </main>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
