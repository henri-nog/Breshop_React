import { useNavigate } from 'react-router-dom'

function Navbar({ isOpen, onClose }) {
  const navigate = useNavigate()

  const goTo = (path) => {
    navigate(path)
    onClose() // fecha o menu depois de clicar
  }

  return (
    <div style={{
      position: "fixed",
      top: 0,
      right: 0,
      width: "250px",
      height: "100%",
      backgroundColor: "#B28B6E",
      color: "white",
      transform: isOpen ? "translateX(0)" : "translateX(100%)",
      transition: "transform 0.3s ease-in-out",
      padding: "20px"
    }}>
      
      <button onClick={onClose}>X</button>

      <h2>Menu</h2>

      <ul style={{ listStyle: "none", padding: 0 }}>
        <li onClick={() => goTo("/")}>Home</li>
        <li onClick={() => goTo("/login")}>Login</li>
        <li onClick={() => goTo("/brand/adidas")}>Adidas</li>
        <li onClick={() => goTo("/brand/nike")}>Nike</li>
      </ul>

    </div>
  )
}

export default Navbar