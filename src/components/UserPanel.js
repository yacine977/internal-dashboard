// UserPanel.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "../styles/UserPanel.css";

// Composant fonctionnel représentant le panneau utilisateur
const UserPanel = ({ username, onLogout }) => {
    const navigate = useNavigate(); // Obtenez la fonction navigate

    // Fonction pour gérer la déconnexion de l'utilisateur
    const handleLogout = () => {
        // Appelez la fonction onLogout si nécessaire
        onLogout();

        // Utilisez navigate pour rediriger vers la page d'accueil ("/")
        navigate("/");
    };

    return (
        <div className="user-panel">
            {/* Informations sur l'utilisateur avec une icône d'utilisateur */}
            <div className="user-info">
                <FontAwesomeIcon icon={faUser} />
                <span>{username}</span>
            </div>
            {/* Bouton de déconnexion avec une icône de déconnexion */}
            <div className="logout" onClick={handleLogout}>
                <FontAwesomeIcon icon={faSignOutAlt} />
                <span>Se déconnecter</span>
            </div>
        </div>
    );
};

// Propriétés requises avec leurs types définis
UserPanel.propTypes = {
    username: PropTypes.string.isRequired,
    onLogout: PropTypes.func.isRequired,
};

export default UserPanel;
