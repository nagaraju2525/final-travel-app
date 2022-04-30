
import React from 'react'
import Body from '../Body'
import BodyTwo from '../BodyTwo'
import Sample from '../Sample'
import Slide from '../Slide'
import ImageInfo from './ImageInfo'
import Gallery from './Gallery'
import Contact from './Contact'
import Footer from './Footer'

const Home = () => {
  return (
    <>
        <Sample />
        <Slide />
        <ImageInfo />
        <Body />
        <BodyTwo />
        <Gallery />
        {/* <Contact />
        <Footer /> */}
    </>
  )
}

export default Home