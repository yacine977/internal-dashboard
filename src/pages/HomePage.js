// HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomePage.css';

const HomePage = () => {
    return (
        <div className="homepage-container">
            {/* Logo */}
            <div className="logo-container">
                <img src={process.env.PUBLIC_URL + '/logo_sidebar.jpg'} alt="Logo Mawzi" className="logo_homepage" />
            </div>

            <h2>Bienvenue dans le Dashboard Mawzi</h2>

            <p className="welcome-text">
                Découvrez les fonctionnalités avancées du tableau de bord Mawzi, conçu pour simplifier la gestion des comptes. <br/>
                Organisez-les par type (distributeurs, cliniques, fabricants) et suivez leur statut (non vérifié, vérifié, gelé). <br/>
                Prenez des décisions éclairées pour une gestion optimale de votre plateforme.
            </p>

            {/* Bouton de connexion vers la page SignIn */}
            <div className="signin-button">
                <Link to="/signin">
                    <button>Se connecter</button>
                </Link>
            </div>

            <p className="contact-info">
                Pour toute assistance, n'hésitez pas à contacter notre support technique disponible 24/7.
            </p>
        </div>
    );
};

export default HomePage;
