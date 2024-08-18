import React from 'react'
import Header from '../layout/Header'
import Issurance from '../components/Issurance'
import Hero from '../components/Hero'
import Product from '../components/Product'
import Tenants from '../components/Tenants'

const Home = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <Issurance/>
      <Product/>
      <Tenants/>
    </div>
  )
}

export default Home
