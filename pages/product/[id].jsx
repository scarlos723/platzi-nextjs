import { useRouter } from "next/router"

export default function Product(){
  const router = useRouter()
  return(
    <main>
      <div>
        El id del producto en la query es {router.query.id} 
      </div>
    </main>
  )
}