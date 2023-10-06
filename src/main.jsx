import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import NavBar from './components/NavBar'
import { NosSalles,EscaladeParis, News,Recrutement, DevenirFranchise, Shop} from './components/export'
import './css/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/NosSalles" element={<NosSalles />} />
        <Route path="/EscaladeParis" element={<EscaladeParis />} />
        <Route path="/News" element={<News />} />
        <Route path="/Recrutement" element={<Recrutement />} />
        <Route path="/DevenirFranchise" element={<DevenirFranchise />} />
        <Route path='/Shop' element={<Shop />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,

)
