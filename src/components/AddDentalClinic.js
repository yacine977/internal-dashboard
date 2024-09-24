import React, { useState, useEffect } from "react";

const AddDentalClinic = ({ addDentalClinic, updateDentalClinic, editingDentalClinic }) => {
    // État initial pour les données d'une clinique dentaire
    const initialDentalClinicState = {
        name: "",
        email: "",
        contact: {
            phoneNumber: "",
            address: "",
            website: "",
        },
        members: 0,
    };

    // États pour suivre les nouvelles données de la clinique dentaire et la visibilité du formulaire
    const [newDentalClinic, setNewDentalClinic] = useState(initialDentalClinicState);
    const [formVisible, setFormVisible] = useState(false);

    // Effet pour remplir le formulaire avec les données de la clinique dentaire en cours d'édition
    useEffect(() => {
        if (editingDentalClinic) {
            setNewDentalClinic(editingDentalClinic);
            setFormVisible(true); // Afficher le formulaire en mode édition
        }
    }, [editingDentalClinic]);

    // Fonction pour gérer les changements dans les champs du formulaire
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        // Si le champ appartient à l'objet "contact", mettre à jour l'état en conséquence
        if (name.includes("contact.")) {
            const contactField = name.split(".")[1];
            setNewDentalClinic((prevDentalClinic) => ({
                ...prevDentalClinic,
                contact: {
                    ...prevDentalClinic.contact,
                    [contactField]: value,
                },
            }));
        } else {
            // Gérer différents types de champs (texte, nombre, case à cocher, etc.)
            setNewDentalClinic((prevDentalClinic) => ({
                ...prevDentalClinic,
                [name]: type === "checkbox" ? checked : value,
            }));
        }
    };

    // Fonction pour soumettre le formulaire
    const handleSubmit = (e) => {
        e.preventDefault();

        // Valider que les champs obligatoires sont remplis
        if (newDentalClinic.name.trim() === "" || newDentalClinic.email.trim() === "") {
            alert("Veuillez remplir tous les champs obligatoires.");
            return;
        }

        // Appeler la fonction appropriée en fonction du contexte
        if (editingDentalClinic) {
            updateDentalClinic(newDentalClinic);
        } else {
            addDentalClinic(newDentalClinic);
        }

        // Réinitialiser les champs du formulaire après l'ajout ou la mise à jour
        setNewDentalClinic(initialDentalClinicState);
        setFormVisible(false); // Masquer le formulaire après l'ajout ou la mise à jour
    };

    // Fonction pour annuler la saisie dans le formulaire
    const handleCancel = () => {
        // Réinitialiser les champs du formulaire
        setNewDentalClinic(initialDentalClinicState);
        setFormVisible(false); // Masquer le formulaire
    };

    // Fonction pour basculer la visibilité du formulaire
    const toggleFormVisibility = () => {
        setFormVisible(!formVisible);
    };

    return (
        <div className="add-dental-clinic-container">
            {!formVisible && (
                <button onClick={toggleFormVisibility}>Ajouter une clinique dentaire</button>
            )}
            {formVisible && (
                <form className="add-dental-clinic-form" onSubmit={handleSubmit}>
                    <label>
                        Nom :
                        <input
                            type="text"
                            name="name"
                            value={newDentalClinic.name}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Email :
                        <input
                            type="email"
                            name="email"
                            value={newDentalClinic.email}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Numéro de téléphone :
                        <input
                            type="text"
                            name="contact.phoneNumber"
                            value={newDentalClinic.contact.phoneNumber}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Adresse :
                        <input
                            type="text"
                            name="contact.address"
                            value={newDentalClinic.contact.address}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Site web :
                        <input
                            type="text"
                            name="contact.website"
                            value={newDentalClinic.contact.website}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Membres :
                        <input
                            type="number"
                            name="members"
                            value={newDentalClinic.members}
                            onChange={handleChange}
                        />
                    </label>
                    <button type="submit">
                        {editingDentalClinic ? "Mettre à jour la clinique dentaire" : "Ajouter une clinique dentaire"}
                    </button>

                    <button type="button" onClick={handleCancel}>
                        Annuler
                    </button>
                </form>
            )}
        </div>
    );
};

export default AddDentalClinic;
