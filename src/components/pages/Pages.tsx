import { useParams } from "react-router-dom"

function Pages() {

    const params = useParams()

    console.log(params)
  return (
    <div>
      <h1>page {params.page}</h1>
    </div>
  )
}

export default Pages
