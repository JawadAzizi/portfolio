import { useState } from "react"
export default function Home() {
  const [page, setPage] = useState('home')
  
  return (
    <main>
      {page === 'home'&& <Home /> }
      
    </main>
    

  )
}
