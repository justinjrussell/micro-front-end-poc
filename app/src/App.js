import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <header>Header</header>
      <main>
        <div className="main-column">
          <iframe 
            name="fragment-module-one" 
            id="fragment-module-one" 
            src="/fragment/module-one/" 
          />
        </div>
        <div className="side-column">
          <div className="top">
            <iframe 
              name="fragment-module-two" 
              id="fragment-module-two" 
              src="/fragment/module-two/" 
            />
          </div>
          <div className="bottom">
            <iframe 
              name="fragment-module-three" 
              id="fragment-module-three" 
              src="/fragment/module-three/" 
            />
          </div>
        </div>
      </main>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
