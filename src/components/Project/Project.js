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
                        <a href="projet-diamond.html"><img src={Diamondphoto} alt='diamond shield logo'/></a>
                        <div className='text'>Diamond Shield</div>
                        <p>Refonte du site d'une compagnie de cyber sécurité fictive appelée Diamond Shield.</p>
                    </div>
                </div>
                <div className='card'>
                    <div className='box'>
                        <a href="project-wild-art.html"><img src={Wamphoto} alt='wild art museum logo'/></a>
                        <div className='text'>Wild Art Museum</div>
                        <p>Version modernisée du site Harvard art museum</p>
                    </div>
                </div>
                <div className='card'>
                    <div className='box'>
                        <a href="project-atout-branches.html"><img src={Atbphoto} alt='atout branches logo'/></a>
                        <div className='text'>Atout Branches</div>
                        <p>Nouveau site du parc d'accrobranche Atout Branches suite au changement de propriétaire.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Project
