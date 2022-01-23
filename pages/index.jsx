import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home (){
  const [produtcList, setProductList] = useState([])

  useEffect(()=>{
    fetch('/api/avo')
    .then(response => response.json())
    .then( data => {
      setProductList(data.results)})
    },[])

  return(
    <main>
      <div>
      Este es el home
      </div>
      <div>
        <Link href="/about"> Ir a about</Link>
      </div>
      <ul>
        {produtcList.map((product, index) => {
          return(
            <li key={index}>{product.name} </li>
          )
        })}
      </ul>
  
    </main>
  )
}