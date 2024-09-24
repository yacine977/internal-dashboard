// UserInfo.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

// Composant fonctionnel représentant les informations de l'utilisateur
const UserInfo = ({ user }) => {
    // Fonction pour gérer la déconnexion de l'utilisateur
    const handleLogout = () => {
        // Implémentez la logique de déconnexion ici
        console.log("Utilisateur déconnecté !");
    };

    return (
        <div className="user-info-container">
            {/* Nom de l'utilisateur avec une icône de flèche vers le bas pour indiquer le menu déroulant */}
            <div className="user-name">
                {user.firstName} {user.lastName}
                <FontAwesomeIcon icon={faCaretDown} />
            </div>
            {/* Menu déroulant avec l'option de déconnexion et d'autres éléments de menu si nécessaire */}
            <div className="dropdown-menu">
                {/* Élément de menu pour la déconnexion */}
                <div onClick={handleLogout}>Se déconnecter</div>
                {/* Ajoutez d'autres éléments de menu ici si nécessaire */}
            </div>
        </div>
    );
};

export default UserInfo;
