import React, { useEffect } from 'react';
import './index.css'
import { Routes, Route,} from 'react-router-dom';
import HomePage from './pages/Home';
import Modeles from './pages/Modeles';
import APropos from './pages/Apropos';
import Contact from './pages/Contact';
import Produits from './pages/Produits';
import Mentions from './pages/mentionsLegale'


const App = () => {


  return (
    <Routes>
      {/* Routes publiques */}
      <Route path="/" element={<HomePage />} />
      <Route path='/modeles' element={<Modeles/>} />
      <Route path='/a-propos' element={<APropos/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/produits' element={<Produits/>} /> 
      <Route path='/mentions-legales' element={<Mentions/>} />
    </Routes>
  )
}

export default App
