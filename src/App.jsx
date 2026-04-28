import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Brand from './pages/Brand'
import Login from './pages/Login'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/brand/:name" element={<Brand />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default App