import React from 'react'
import Header from '../Nav/Header'
import MainSection from '../HeroSection/MainSection'
import CardsSection from '../HeroSection/CardsSection'
import Marquee from '../HeroSection/marquee'
import TicTacToe from '../HeroSection/TicTacToe'
import Experience from '../HeroSection/Experience'
import Awards from '../HeroSection/Awards'
import Footer from '../HeroSection/Footer'
import Services from '../HeroSection/Services'

const NavPage = () => {
  return (
   <div className="bg-black min-h-screen">
      <Header />
      <main>
        <MainSection />
        <Marquee />
        <CardsSection />
        <Services/>
        <Experience/>
        <Awards/>
        <TicTacToe />
      </main>
      <Footer/>
    </div>
  )
}

export default NavPage