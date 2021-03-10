import React from 'react';
import ChrisPic from '../../images/chris.jpg';
import './About.css';

function About() {
    return (
        <section className='about' id='about'>
        <div className='max-width'>
            <h2 className='title'>A propos de moi</h2>
            <div className='about-content'>
                <div className='column left'>
                    <img src={ChrisPic} alt='christopher'/>
                </div>
                <div className='column right'>
                    <div className='text'>Je m'appelle <span>Christopher</span></div>
                    <p>
                        J’ai choisi de me reconvertir dans le développement web après avoir découvert celui-ci durant
                     un module universitaire lors de mes études en communication. J’ai porté mon choix sur une formation en 
                     campus à la Wild Code School axée sur la pratique permettant de développer mes connaissances et capacités à travers des 
                     projets. Je suis actuellement à la recherche d'un stage pouvant durée de 4 à 6 mois dans le but de compléter
                      cette formation. Mon objectif est d'obtenir à l'issue de ce stage un diplôme de niveau bac + 2 de développeur web et mobile.
                    </p>
                    <a href='cv'>Télécharger CV</a>
                </div>
            </div>
        </div>
    </section>
    )
}

export default About
