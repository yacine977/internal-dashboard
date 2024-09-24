// MainContent.js
import React from "react";
import AccountList from "./AccountList"; // Import du composant AccountList pour afficher la liste des comptes

// Composant fonctionnel représentant la section principale du tableau de bord
const MainContent = () => {
    return (
        <div className="main-content-container">

            {/* Ajoutez le composant AccountList pour afficher la liste des comptes */}
            <AccountList />
        </div>
    );
};

export default MainContent;
