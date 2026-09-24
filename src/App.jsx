import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import GameCard from './components/GameCard'
import Home from './pages/Home'
import Contato from './pages/Contato'
import Jogos from './pages/Jogos'
import Login from './pages/Login'
import Error from './pages/Error'


const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col justify-between bg-[#141414] pt-4 ">
        <Header>
          <Routes>
            <Routes path="/" element={<Home />} />
            <Routes path="/" element={<Jogos />} />
            <Routes path="/" element={<Contato />} />
            <Routes path="/" element={<Login />} />
            <Routes path="/" element={<Error />} />
          </Routes>
        </Header>
      </div>
    </Router>
  )
}

export default App

