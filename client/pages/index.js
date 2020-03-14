import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import Header from '../components/header'
import Banner from '../components/banner'
import Projects from '../components/projects'
import About from '../components/about'
import Contact from '../components/contact'
import Footer from '../components/footer'



const Home = () => {
  

  return(
    <div>
    <Head>
      <title>Barton-Outstanding Full Stack Developer</title>
      <link rel="icon" href="/images/icon.png" />
    </Head>
    <Header/>
    <Banner/>
    
    <div className="vertical-space"></div>
    <Projects/>

    <About/>
    <Contact/>
    <Footer/>

    {/* <style jsx>
      {`
      .vertical-space{
        padding:30px;
      }
      `}
    </style> */}
  
  </div>
  )

}
  
  


export default Home
