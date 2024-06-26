import React from 'react'
import Item from '../components/Item'
import Button from '../components/Button'
import Header from '../components/Header'
import Footer from '../components/Footer'



const Store = () => {
    
  return (
    <>
    <Header />
    <Item section="MUSIC"/>
    <Item section="MERCH"/>
    <Button />
     <Footer />
    </>
  )
}

export default Store