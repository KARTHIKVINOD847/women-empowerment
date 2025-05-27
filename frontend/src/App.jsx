import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './users/components/Header'
import Home from './users/pages/Home'
import Auth from './pages/Auth'
import Pagenotfound from './pages/Pagenotfound'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Auth />} />
        <Route path='/register' element={<Auth register />} />
        <Route path='*' element={<Pagenotfound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App

