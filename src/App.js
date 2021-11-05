import React from 'react'
// import { Routes, Route } from 'react-router-dom';
import Header from './components/nav/Header'
import Footer from './components/nav/Footer'
import Profile from './components/Profile'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Salutations from './components/Salutations'
import {Helmet} from "react-helmet";

function App() {

  return (
    <div>
      <Helmet>
        <title>vanbiet nguyen</title>
        <meta name="description" content="my website" />
    </Helmet>
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

