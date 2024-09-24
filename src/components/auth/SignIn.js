// SignIn.js
import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import ReactModal from 'react-modal'; // Importez react-modal
// import axios from 'axios'; // sera fonctionnel quand le back end sera prêt
import '../../styles/SignIn.css';



const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false); // Nouvel état pour la gestion du chargement
    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
    };

    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            setEmailError('Adresse e-mail non valide');
            setModalIsOpen(true);
            return false;
        } else {
            setEmailError(null);
            return true;
        }
    };

    const handleSignIn = async (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            return;
        }

        // Simulation de la gestion d'authentification (à remplacer par une requête HTTP)
        try {
            setIsLoading(true); // Activer le chargement

            // Partie commentée pour la requête HTTP avec Axios
            /*
            const response = await axios.post('/api/signin', {
                email,
                password,
            });

            // ... (traitement des données de réponse)
            */

            const token = 'un_token_statique';
            const firstName = 'Yacine';
            const lastName = 'Tamindjoute';

            localStorage.setItem('authToken', token);
            localStorage.setItem('user', JSON.stringify({firstName, lastName}));

            // Réinitialiser les champs du formulaire après une connexion réussie
            setEmail('');
            setPassword('');

            navigate('/dashboard');
            console.log('Redirection vers le tableau de bord réussie !');
            console.log('Informations de l\'utilisateur stockées :', {firstName, lastName});
        } catch (error) {
            console.error('Erreur d\'authentification', error);
            // Afficher un message d'erreur spécifique selon le type d'erreur
            // Gérer la désactivation du chargement en cas d'échec
        } finally {
            setIsLoading(false); // Désactiver le chargement quel que soit le résultat
        }
    };

    return (
        <div className="signin-container">
            <h2>Connexion Utilisateur Interne</h2>
            <form onSubmit={handleSignIn}>
                <label>Email:</label>
                <input type="email" value={email} onChange={handleEmailChange} required/>

                <label>Mot de passe:</label>
                <input type="password" value={password} onChange={handlePasswordChange} required/>

                {/* Désactiver le bouton de soumission pendant le chargement */}
                <button type="submit" disabled={isLoading}>
                    {isLoading ? 'Connexion en cours...' : 'Se connecter'}
                </button>
            </form>

            {/* Fenêtre modale pour afficher le message d'erreur */}
            <ReactModal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                contentLabel="Message d'erreur"
            >
                <p>{emailError}</p>
                <button onClick={() => setModalIsOpen(false)}>Fermer</button>
            </ReactModal>
        </div>
    );
};

export default SignIn;

