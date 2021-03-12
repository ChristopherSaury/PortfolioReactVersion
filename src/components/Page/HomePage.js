import React from 'react'
import About from '../About/About'
import ContactEmailjs from '../Contact/ContactEmailJs'
import Footer from '../Footer/Footer'
import Home from '../Home/Home'
import Navbar from '../Navbar/Navbar'
import Project from '../Project/Project'
import Skills from '../Skills/Skills'

function HomePage() {
    return (
        <div>
            <Navbar/>
            <Home/>
            <About/>
            <Skills/>
            <Project/>
            <ContactEmailjs/>
            <Footer/>
        </div>
    )
}

export default HomePage
