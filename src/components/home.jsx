import { useState } from 'react'
import Nav from "./nav"
import Team from "./contact"
import FAQ from "./faq"
import Services from './services'
import Subscribe from "./subscribe"
import Info from "./information"

function Home() {

  return (
    <>
       <Nav />
       <Team />
       <FAQ />
      {/* <Services />*/}
       <Subscribe />
       <Info />
    </>
  )
}

export default Home