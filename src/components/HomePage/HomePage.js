import React from 'react'
import About from '../About/About'
import Contact from '../Contact/Contact'
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
            <Contact/>
        </div>
    )
}

export default HomePage
