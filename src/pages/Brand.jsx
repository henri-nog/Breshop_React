import { useParams } from 'react-router-dom'

function Brand() {
  const { name } = useParams()

  return <h1>Marca: {name}</h1>
}

export default Brand