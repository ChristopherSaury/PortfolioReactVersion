import React from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

function ContactEmailjs() {

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, e.target, process.env.REACT_APP_USER_ID)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
      };

    return (
        
        <section className='contact' id='contact'>
                <div className='max-width'>
                    <h2 class='title'>Me Contacter</h2>
                    <div className='contact-content'>
                    <div className='column left'>
                        <div className='text'>Coordonnées</div>
                        <div className='icons'>
                            <div className='row'>
                            <i class='fas fa-user'></i>
                                <div className='info'>
                                    <div class='head'>Nom</div>
                                    <div class='sub-title'>Christopher Saury</div>
                                </div>
                            </div>

                            <div class='row'>
                                <i class='fas fa-map-marker-alt'></i>
                                <div class='info'>
                                    <div class='head'>Adresse</div>
                                    <div class='sub-title'>Osny, 95520, Val d'Oise, France</div>
                                </div>
                            </div>

                            <div class='row'>
                                <i class='fas fa-at'></i>
                                <div class='info'>
                                    <div class='head'>Email</div>
                                    <div class='sub-title'>saurychristopher@gmail.com</div>
                                </div>
                            </div>

                            <div class='row'>
                                <i class="fas fa-globe"></i>
                                <div class='info'>
                                    <div class='head'>Réseaux sociaux</div>
                                    <div class='sub-title'><a href="https://github.com/ChristopherSaury"><i class="fab fa-github-square"></i></a>   <a href="https://www.linkedin.com/in/christopher-saury-9316b61bb/"><i class="fab fa-linkedin"></i></a></div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='column right'>
                        <div class="text">Envoyer un message</div>
                        <form onSubmit={sendEmail}>
                            <div className='fields'>
                                <div className='field name'>
                                    <input
                                    type='text'
                                    id='name'
                                    name='name'
                                    placeholder='Votre nom*'
                                    required/>
                                </div>
                                <div className='field email'>
                                    <input
                                    type='email'
                                    id='email'
                                    name='email'
                                    placeholder='Votre email*'
                                    required/>
                                </div>
                            </div>
                                <div className='field subject'>
                                    <input
                                    type='text'
                                    id='subject'
                                    name='subject'
                                    placeholder='Sujet du message'
                                    required/>
                                </div>
                                <div className='field textarea'>
                                    <textarea
                                    id='message'
                                    name='message'
                                    cols="30"
                                    rows="10"
                                    placeholder="Message..."
                                    required></textarea>
                                </div>
                                <div className='button'>
                                    <button type='submit'>Envoyer</button>
                                </div>
                        </form>

                    </div>
                    </div>
                </div>
            </section>
    )
}

export default ContactEmailjs;

