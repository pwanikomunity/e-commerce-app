import React from 'react'
import Header from '../components/header'
import Couresel from '../components/Couresel'
import Footer from '../components/home/Footer'
import Content from '../components/home/Content'

export default function () {
  return (
    <div className='bg-gray-900 pt-[1rem] '>
        <Header />
        
        <Couresel />
        <Content />
        <Footer />

    </div>
  )
}
