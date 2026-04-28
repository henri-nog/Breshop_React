import { useState } from 'react'
import Navbar from './Navbar'

function Header() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 20px",
        borderBottom: "1px solid #ccc"
      }}>
        
        <h2>NetClothes</h2>

        <div>
          <button>🔍</button>
          <button>👤</button>
          <button onClick={() => setOpen(true)}>☰</button>
        </div>

      </header>

      <Navbar isOpen={open} onClose={() => setOpen(false)} />
    </>
  )
}

export default Header