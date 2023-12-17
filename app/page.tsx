'use client'
import { useState } from "react"
import { Main } from "./libs/components/home"
import { About } from "./libs/components/about"
import { Contact } from "./libs/components/contact"
import { Blog } from "./libs/components/blog"
import { Portfolio } from "./libs/components/portfolio"
import { NavigationButton } from "./libs/components/navigator"
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
