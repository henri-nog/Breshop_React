import Header from '../components/Header'
import BrandCard from '../components/BrandCard'

import adidasLogo from '../assets/adidas.png'

function Home() {
  return (
    <>
      <Header />

      <h2 style={{ padding: "20px" }}>Marcas</h2>

      <div style={{
        display: "flex",
        gap: "10px",
        padding: "20px"
      }}>
        <BrandCard name="adidas" image={adidasLogo} />
        <BrandCard name="nike" />
        <BrandCard name="gucci" />
        <BrandCard name="armani" />
      </div>
    </>
  )
}

export default Home

