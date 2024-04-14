import React from 'react'
import style from './Home.module.css'
import Contact from '../Contact/Contact'
import Testymonials from '../Testymonials/Testymonials'
import Recipes from '../Recipes/Recipes'
import Testy from '../Tasty/Tasty'
import About from '../About/About'
import Work from '../Work/Work'
import {Link} from 'react-router-dom'

export default function Home() {
  return <>
  {/* navbar */}
  <nav  className={`${style.nav} navbar navbar-expand-lg `}>
  <div className="container-fluid">
    <Link  className={`${style.nav1} navbar-brand text-white ms-5 text-center`} href="#">Peachy Pup Bakery</Link>  
  </div>
</nav>

{/* Sec1 Testy */}
  <Testy/>

  {/* Sec2 Work */}
  <Work/>

  {/* Sec3 About  */}
  <About/>

  {/* Sec4 Recipes  */}
      <Recipes/>

      {/* Sec5 Testymonials  */}
      <Testymonials/>

      {/* Sec6 Contact */}
      <Contact/>
  </>
}