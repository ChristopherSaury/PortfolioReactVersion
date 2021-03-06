import React from 'react'
import Diamondphoto from '../../images/diamond-logo.png';
import Wamphoto from '../../images/wam-logo.svg';
import Atbphoto from '../../images/atb-logo.png';
import './Project.css';

function Project() {
    return (
        <section className='project' id='project'>
        <div className='max-width'>
            <h2 className='title'>Mes Projets</h2>
            <div className='carousel owl-carousel'>
                <div className='card'>
                    <div className='box'>
                        <a href='https://eager-noether-69d23b.netlify.app/'><img src={Diamondphoto} alt='diamond shield logo'/></a>
                        <div className='text'>Diamond Shield</div>
                        <p>Refonte du site d'une compagnie de cyber sécurité fictive appelée Diamond Shield.</p>
                    </div>
                </div>
                <div className='card'>
                    <div className='box'>
                        <a href="https://wildartmuseum.netlify.app/"><img src={Wamphoto} alt='wild art museum logo'/></a>
                        <div className='text'>Wild Art Museum</div>
                        <p>Version modernisée du site Harvard art museum</p>
                    </div>
                </div>
                <div className='card'>
                    <div className='box'>
                        <a href="https://www.atoutbranches.com/"><img src={Atbphoto} alt='atout branches logo'/></a>
                        <div className='text'>Atout Branches</div>
                        <p>Il s'agit ici d'un projet pour un client. Voici le site internet du parc d'accrobranche Atout Branches qui est situé à Milly-la-Forêt dans le 91.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Project
