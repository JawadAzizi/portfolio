'use client'
import { useState } from "react"
import { Main } from "./libs/home"
import { About } from "./libs/components/about"
import { Contact } from "./libs/contact"
import { Blog } from "./libs/blog"
import { Portfolio } from "./libs/portfolio"
import { NavigationButton } from "./libs/navigator"
export default function Home() {
  const [page, setPage] = useState('home')
  return (
    <main>
      <NavigationButton setPage = {setPage} page = {page}/>
      {page === 'home'&& <Main /> }
      {page === 'about'&& <About /> }
      {page === 'contact'&& <Contact /> }
      {page === 'blog'&& <Blog /> }
      {page === 'portfolio'&& <Portfolio /> }
    </main>

  )
}
