import React from 'react'
import Categories from '../../Component/Categories/Categories'
import Contact from '../../Component/Contact/Contact'
import { FeatureProducts } from '../../Component/FeatureProducts/FeatureProducts'
import { Slider } from '../../Component/Slider/Slider'
import "./Home.scss"

function Home() {
  return (
    <div>
      <Slider/>
      <FeatureProducts type="featured"/>
      <Categories/>
      <FeatureProducts type="trending"/>
      <Contact/>

    </div>
  )
}

export default Home