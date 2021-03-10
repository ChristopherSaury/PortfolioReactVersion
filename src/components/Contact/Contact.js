import React, { Component } from 'react';
import axios from 'axios';
import './Contact.css';

export default class Contact extends Component {
    state={
        name: '',
        email: '',
        subject: '',
        message: '',
        sent: false
    }

    handleName = (e) => {
        this.setState({
            name: e.target.value
        });
    }

    handleEmail = (e) => {
        this.setState({
            email: e.target.value
        });
    }

    handleSubject = (e) => {
        this.setState({
            subject: e.target.value
        });
    }

    handleMessage = (e) => {
        this.setState({
            message: e.target.value
        });
    }

    formSubmit = (e) => {
        e.preventDefault();

        const data = {
            name: this.state.name,
            email: this.state.email,
            subject: this.state.subject,
            message: this.state.message
        }

        axios.post('/contact', data)
        .then(res => {
            this.setState({
                sent: true
            }, this.resetForm());
        })
        .catch(()=>{
           console.log('message not send') 
        })
    }

    resetForm = () => {
        this.setState({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
        setTimeout(() => {
            this.setState({
              sent: false
            });
          }, 3000);
    }

    render() {
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
                        <form onSubmit={this.formSubmit}>
                            <div className='fields'>
                                <div className='field name'>
                                    <input
                                    type='text'
                                    name='name'
                                    placeholder='Votre nom'
                                    value={this.state.name}
                                    onChange={this.handleName}
                                    required/>
                                </div>
                                <div className='field email'>
                                    <input
                                    type='email'
                                    name='email'
                                    placeholder='Votre email'
                                    value={this.state.email}
                                    onChange={this.handleEmail}
                                    required/>
                                </div>
                            </div>
                                <div className='field subject'>
                                    <input
                                    type='text'
                                    name='subject'
                                    placeholder='Sujet du message'
                                    value={this.state.subject}
                                    onChange={this.handleSubject}
                                    required/>
                                </div>
                                <div className='field textarea'>
                                    <textarea
                                    name='message'
                                    cols="30"
                                    rows="10"
                                    placeholder="Message..."
                                    value={this.state.message}
                                    onChange={this.handleMessage}
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
}
