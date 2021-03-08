import React from 'react';
import './Home.css';

function Home() {
    return (
        <section className='home' id='home'>
        <div className='max-width'>
            <div className='home-content'>
                <div className='text-2'>Christopher Saury</div>
                <div className='text-3'><span class='typing'></span></div>
                <a href="#about">En Savoir Plus</a>
            </div>
        </div>
    </section>
    )
}

export default Home
