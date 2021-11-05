import React from 'react'
// import { Routes, Route } from 'react-router-dom';
import Header from './components/nav/Header'
import Footer from './components/nav/Footer'
import Profile from './components/Profile'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Salutations from './components/Salutations'

function App() {

  return (
    <div>
      <Header />
        <main>
          <Profile />
          <AboutMe />
          <Skills />
          <Salutations />
        </main>
      <Footer />
    </div>
  );
}

export default App;

