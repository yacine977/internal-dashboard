// Dashboard.js
import React, { useState, useEffect } from 'react';
import MainContent from './MainContent';
import UserPanel from './UserPanel';
import Sidebar from './Sidebar';


const Dashboard = () => {
    // État pour l'utilisateur (à utiliser plus tard si nécessaire)
    // eslint-disable-next-line no-unused-vars
    const [user, setUser] = useState({});
    // État pour l'utilisateur actuel (à utiliser dans l'interface utilisateur)
    // eslint-disable-next-line no-unused-vars
    const [currentUser, setCurrentUser] = useState('Yacine Tamindjoute');

    // Fonction de déconnexion
    const handleLogout = () => {
        alert('Déconnexion en cours...');
    };

    // Effet pour récupérer l'utilisateur depuis le stockage local lors du chargement
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    return (
        <div className="dashboard-container">
            {/* Panneau utilisateur avec nom d'utilisateur et bouton de déconnexion */}
            <UserPanel username={currentUser} onLogout={handleLogout} />
            {/* Barre latérale pour la navigation */}
            <Sidebar />
            {/* Contenu principal de l'interface utilisateur */}
            <MainContent />
        </div>
    );
};

export default Dashboard;
