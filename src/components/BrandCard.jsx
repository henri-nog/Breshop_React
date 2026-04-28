import { useNavigate } from 'react-router-dom'

function BrandCard({ name, image }) {
  const navigate = useNavigate()

  return (
    <div 
      onClick={() => navigate(`/brand/${name}`)}
      style={{
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "15px",
        margin: "10px",
        cursor: "pointer",
        textAlign: "center",
        width: "120px",
        backgroundColor: "#f9f9f9"
      }}
    >
      <img 
        src={image} 
        alt={name} 
        style={{ width: "80px", height: "auto" }}
      />
    </div>
  )
}

export default BrandCard