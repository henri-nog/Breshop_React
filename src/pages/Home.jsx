import Header from '../components/Header'
import BrandCard from '../components/BrandCard'

import adidasLogo from '../assets/adidas.png'
import nikeLogo from '../assets/nike.png'
import gucciLogo from '../assets/gucci.png'
import armaniLogo from '../assets/armani.png'

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
        <BrandCard name="nike" image={nikeLogo} />
        <BrandCard name="gucci" image={gucciLogo} />
        <BrandCard name="armani" image={armaniLogo} />
      </div>
    </>
  )
}

export default Home