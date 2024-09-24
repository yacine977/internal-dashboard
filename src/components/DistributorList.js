import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import AddDistributor from "./AddDistributor";
import "../styles/DistributorList.css";
import UserPanel from "./UserPanel";

const DistributorList = () => {
    // État pour l'utilisateur actuel (à utiliser dans l'interface utilisateur)
    // eslint-disable-next-line no-unused-vars
    const [currentUser, setCurrentUser] = useState("Martin Ravets");

    // Fonction de déconnexion
    const handleLogout = () => {
        alert("Déconnexion en cours...");
    };

    // État pour stocker la liste des comptes distributeurs
    const [distributors, setDistributors] = useState(() => {
        const storedDistributors = localStorage.getItem("distributors");
        return storedDistributors ? JSON.parse(storedDistributors) : [];
    });

    // État pour gérer le compte distributeur en cours d'édition
    const [editingDistributor, setEditingDistributor] = useState(null);

    // Fonction pour ajouter un nouveau compte distributeur
    const addDistributor = (newDistributor) => {
        setDistributors((prevDistributors) => [...prevDistributors, newDistributor]);
    };

    // Fonction pour supprimer un compte distributeur
    const removeDistributor = (name) => {
        setDistributors((prevDistributors) => prevDistributors.filter(d => d.name !== name));
    };

    // Fonction pour éditer un compte distributeur
    const editDistributor = (distributor) => {
        setEditingDistributor(distributor);
    };

    // Fonction pour mettre à jour les informations d'un compte distributeur
    const updateDistributor = (updatedInfo) => {
        setDistributors((prevDistributors) => {
            return prevDistributors.map((distributor) =>
                distributor.name === editingDistributor.name ? { ...distributor, ...updatedInfo } : distributor
            );
        });
        setEditingDistributor(null);
    };

    // Effet pour sauvegarder la liste des comptes distributeurs dans le stockage local
    useEffect(() => {
        localStorage.setItem("distributors", JSON.stringify(distributors));
    }, [distributors]);

    return (
        <div className="distributor-list-container">
            {/* Barre latérale pour la navigation */}
            <Sidebar />
            {/* Panneau utilisateur avec nom d'utilisateur et bouton de déconnexion */}
            <UserPanel username={currentUser} onLogout={handleLogout} />
            <div className="distributor-list-content">
                <h3>Liste des comptes distributeurs</h3>
                {distributors.length > 0 ? (
                    <table>
                        <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Email</th>
                            <th>Numéro de téléphone</th>
                            <th>Adresse</th>
                            <th>Site web</th>
                            <th>Membres</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {distributors.map((distributor) => (
                            <tr key={distributor.name}>
                                <td>{distributor.name}</td>
                                <td>{distributor.email}</td>
                                <td>{distributor.contact.phoneNumber}</td>
                                <td>{distributor.contact.address}</td>
                                <td>{distributor.contact.website}</td>
                                <td>{distributor.members}</td>
                                <td>
                                    <button onClick={() => editDistributor(distributor)}>
                                        Modifier
                                    </button>
                                    <button onClick={() => removeDistributor(distributor.name)}>
                                        Supprimer
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                ) : (
                    <p>Aucun compte distributeur trouvé.</p>
                )}

                {/* Composant pour ajouter ou éditer un compte distributeur */}
                <AddDistributor
                    addDistributor={addDistributor}
                    updateDistributor={updateDistributor}
                    editingDistributor={editingDistributor}
                />
            </div>
        </div>
    );
};

export default DistributorList;
