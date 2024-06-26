import React from 'react'
import ProductData from "../components/ProductData";
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
const ProductDetails = () => {
   const {productId} = useParams()
  return (
    <>
    <Header />
   <ProductData prodId={productId}/>
   <Footer />
   </>
  )
}

export default ProductDetails