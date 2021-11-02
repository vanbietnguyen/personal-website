import React from 'react'
import Header from './components/nav/Header'
import Footer from './components/nav/Footer'
import AboutMe from './components/AboutMe'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <AboutMe />
      </main>
      <Footer />
    </div>
  );
}

export default App;
