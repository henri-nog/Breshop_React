import { useNavigate } from 'react-router-dom'

function BrandCard({ name }) {
  const navigate = useNavigate()

  return (
    <div 
      onClick={() => navigate(`/brand/${name}`)}
      style={{
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "20px",
        margin: "10px",
        cursor: "pointer",
        textAlign: "center",
        width: "120px"
      }}
    >
      <h3>{name}</h3>
    </div>
  )
}

export default BrandCard