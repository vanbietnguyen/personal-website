import React from 'react'
import Header from './components/nav/Header'
import Footer from './components/nav/Footer'
import Profile from './components/Profile'
import AboutMe from './components/AboutMe'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Profile />
        <AboutMe />
        
      </main>
      <Footer />
    </div>
  );
}

export default App;
