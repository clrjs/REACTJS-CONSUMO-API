import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { ToastContainer } from 'react-toastify/unstyled'
import HomePage from './pages/HomePage'
import CadastroPage from './pages/CadastroPage'
import ListaPage from './pages/ListaPage'
import { Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/cadastro' element={<CadastroPage />} />
          <Route path='/lista' element={<ListaPage />} />
        </Routes>
      </main>
      <Footer />
      <ToastContainer autoClose={5000} />
    </>
  )
}

export default App
