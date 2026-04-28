function Header() {
  return (
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
        <button>☰</button>
      </div>

    </header>
  )
}

export default Header