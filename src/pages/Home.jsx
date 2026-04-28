import Header from '../components/Header'
import BrandCard from '../components/BrandCard'

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
        <BrandCard name="adidas" />
        <BrandCard name="nike" />
        <BrandCard name="gucci" />
        <BrandCard name="armani" />
      </div>
    </>
  )
}

export default Home