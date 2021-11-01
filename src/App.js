import './App.css';
import React from 'react'
import Header from './Header'
import Footer from './Footer'
import './index.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <div>body</div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
