import React from 'react'
import Hero from '../components/hero'
import Change from '../components/change'
import Learn from '../components/learn'
import Coach from '../components/coach'
import Recap from '../components/recap'
import Faq from '../components/faq'
import Examples from '../components/examples'
import Featuredin from '../components/featuredin'
import Navbar from '../components/navbar'

function Main() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Change/>
      <Learn/>
      <Featuredin/>
      <Examples/>
      <Coach/>
      <Recap/>
      <Faq/>
    </div>
  )
}

export default Main