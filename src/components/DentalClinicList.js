import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import AddDentalClinic from "./AddDentalClinic";
import "../styles/DentalClinicList.css";
import UserPanel from "./UserPanel";

const DentalClinicList = () => {
    // État pour l'utilisateur actuel (à utiliser dans l'interface utilisateur)
    // eslint-disable-next-line no-unused-vars
    const [currentUser, setCurrentUser] = useState("Martin Ravets");

    // Fonction de déconnexion
    const handleLogout = () => {
        alert("Déconnexion en cours...");
    };

    // État pour stocker la liste des cliniques dentaires
    const [dentalClinics, setDentalClinics] = useState(() => {
        const storedDentalClinics = localStorage.getItem("dentalClinics");
        return storedDentalClinics ? JSON.parse(storedDentalClinics) : [];
    });

    // État pour gérer la clinique dentaire en cours d'édition
    const [editingDentalClinic, setEditingDentalClinic] = useState(null);

    // Fonction pour ajouter une nouvelle clinique dentaire
    const addDentalClinic = (newDentalClinic) => {
        setDentalClinics((prevDentalClinics) => [...prevDentalClinics, newDentalClinic]);
    };

    // Fonction pour supprimer une clinique dentaire
    const removeDentalClinic = (name) => {
        setDentalClinics((prevDentalClinics) => prevDentalClinics.filter(d => d.name !== name));
    };

    // Fonction pour éditer une clinique dentaire
    const editDentalClinic = (dentalClinic) => {
        setEditingDentalClinic(dentalClinic);
    };

    // Fonction pour mettre à jour les informations d'une clinique dentaire
    const updateDentalClinic = (updatedInfo) => {
        setDentalClinics((prevDentalClinics) => {
            return prevDentalClinics.map((dentalClinic) =>
                dentalClinic.name === editingDentalClinic.name ? { ...dentalClinic, ...updatedInfo } : dentalClinic
            );
        });
        setEditingDentalClinic(null);
    };

    // Effet pour sauvegarder la liste des cliniques dentaires dans le stockage local
    useEffect(() => {
        localStorage.setItem("dentalClinics", JSON.stringify(dentalClinics));
    }, [dentalClinics]);

    return (
        <div className="dental-clinic-list-container">
            {/* Barre latérale pour la navigation */}
            <Sidebar />
            {/* Panneau utilisateur avec nom d'utilisateur et bouton de déconnexion */}
            <UserPanel username={currentUser} onLogout={handleLogout} />
            <div className="dental-clinic-list-content">
                <h3>Liste des cliniques dentaires</h3>
                {dentalClinics.length > 0 ? (
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
                        {dentalClinics.map((dentalClinic) => (
                            <tr key={dentalClinic.name}>
                                <td>{dentalClinic.name}</td>
                                <td>{dentalClinic.email}</td>
                                <td>{dentalClinic.contact?.phoneNumber}</td>
                                <td>{dentalClinic.contact?.address}</td>
                                <td>{dentalClinic.contact?.website}</td>
                                <td>{dentalClinic.members}</td>
                                <td>
                                    <button onClick={() => editDentalClinic(dentalClinic)}>
                                        Modifier
                                    </button>
                                    <button onClick={() => removeDentalClinic(dentalClinic.name)}>
                                        Supprimer
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                ) : (
                    <p>Aucune clinique dentaire trouvée.</p>
                )}

                {/* Composant pour ajouter ou éditer une clinique dentaire */}
                <AddDentalClinic
                    addDentalClinic={addDentalClinic}
                    updateDentalClinic={updateDentalClinic}
                    editingDentalClinic={editingDentalClinic}
                />
            </div>
        </div>
    );
};

export default DentalClinicList;
