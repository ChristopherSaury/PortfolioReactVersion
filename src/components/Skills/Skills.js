import React from 'react';
import './Skills.css';

function Skills() {
    return (
        <section className='skills' id='skills'>
        <div className='max-width'>
            <h2 className='title'>Compétences</h2>
            <div className='skills-content'>
                <div className='column left'>
                    <div className='text'>Mes expériences</div>
                    <p>
                        Durant ma formation j'ai participé à 3 projets d'équipe. Le premier consistait à la réalisation d'un site statique
                        en utilisant uniquement HTML/CSS. Pour le second projet réalisé, toujours en équipe nous avons décidé de moderniser
                        le site du musée d'Harvard. Pour cela nous avons utilisé React comme librairie et nous nous sommes servi de l'API du musée.
                        Notre troisième réalisation était un projet client. Nos clients étaient deux associés ayant racheté un parc d'accrobranche
                        situé à Milly-la-Forêt (91) et souhaitant en même temps refaire le site internet vieillissant de celui-ci.
                    </p>
                </div>
                <div className='column right'>
                    <div className='bars'>
                        <div className='info'>
                            <span>HTML</span>
                            <span>80%</span>
                        </div>
                        <div className='line html'></div>
                    </div>
                    <div className='bars'>
                        <div className='info'>
                            <span>CSS</span>
                            <span>65%</span>
                        </div>
                        <div className='line css'></div>
                    </div>
                    <div className='bars'>
                        <div className='info'>
                            <span>Javascript</span>
                            <span>60%</span>
                        </div>
                        <div className='line js'></div>
                    </div>
                    <div className='bars'>
                        <div className='info'>
                            <span>React</span>
                            <span>55%</span>
                        </div>
                        <div className='line react'></div>
                    </div>
                    <div className='bars'>
                        <div className='info'>
                            <span>Node</span>
                            <span>55%</span>
                        </div>
                        <div className='line node'></div>
                    </div>
                    <div className='bars'>
                        <div className='info'>
                            <span>MYSQL</span>
                            <span>60%</span>
                        </div>
                        <div className='line mysql'></div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    )
}

export default Skills
