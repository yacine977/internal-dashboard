import React, { useState, useEffect } from "react";

const AddDistributor = ({ addDistributor, updateDistributor, editingDistributor }) => {
    // État initial pour les données d'un distributeur
    const initialDistributorState = {
        name: "",
        email: "",
        contact: {
            phoneNumber: "",
            address: "",
            website: "",
        },
        members: 0,
    };

    // États pour suivre les nouvelles données du distributeur et la visibilité du formulaire
    const [newDistributor, setNewDistributor] = useState(initialDistributorState);
    const [formVisible, setFormVisible] = useState(false);

    useEffect(() => {
        // Si editingDistributor existe, remplissez le formulaire avec ses données
        if (editingDistributor) {
            setNewDistributor(editingDistributor);
            setFormVisible(true); // Afficher le formulaire en mode édition
        }
    }, [editingDistributor]);

    // Fonction pour gérer les changements dans les champs du formulaire
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        // Si le champ appartient à l'objet "contact", mettez à jour l'état de manière appropriée
        if (name.includes("contact.")) {
            const contactField = name.split(".")[1];
            setNewDistributor((prevDistributor) => ({
                ...prevDistributor,
                contact: {
                    ...prevDistributor.contact,
                    [contactField]: value,
                },
            }));
        } else {
            // Gérer les types de champs différents (texte, nombre, case à cocher, etc.)
            setNewDistributor((prevDistributor) => ({
                ...prevDistributor,
                [name]: type === "checkbox" ? checked : value,
            }));
        }
    };

    // Fonction pour soumettre le formulaire
    const handleSubmit = (e) => {
        e.preventDefault();

        // Valider que les champs obligatoires sont remplis
        if (newDistributor.name.trim() === "" || newDistributor.email.trim() === "") {
            alert("Veuillez remplir tous les champs obligatoires.");
            return;
        }

        // Appeler la fonction appropriée en fonction du contexte
        if (editingDistributor) {
            updateDistributor(newDistributor);
        } else {
            addDistributor(newDistributor);
        }

        // Réinitialiser les champs du formulaire après l'ajout ou la mise à jour
        setNewDistributor(initialDistributorState);
        setFormVisible(false); // Cacher le formulaire après l'ajout ou la mise à jour
    };

    // Fonction pour annuler la saisie dans le formulaire
    const handleCancel = () => {
        // Réinitialiser les champs du formulaire
        setNewDistributor(initialDistributorState);
        setFormVisible(false); // Cacher le formulaire
    };

    // Fonction pour basculer la visibilité du formulaire
    const toggleFormVisibility = () => {
        setFormVisible(!formVisible);
    };

    return (
        <div className="add-distributor-container">
            {!formVisible && (
                <button onClick={toggleFormVisibility}>Ajouter un Distributeur</button>
            )}
            {formVisible && (
                <form className="add-distributor-form" onSubmit={handleSubmit}>
                    <label>
                        Nom :
                        <input
                            type="text"
                            name="name"
                            value={newDistributor.name}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Email :
                        <input
                            type="email"
                            name="email"
                            value={newDistributor.email}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Numéro de téléphone :
                        <input
                            type="text"
                            name="contact.phoneNumber"
                            value={newDistributor.contact.phoneNumber}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Adresse :
                        <input
                            type="text"
                            name="contact.address"
                            value={newDistributor.contact.address}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Site web :
                        <input
                            type="text"
                            name="contact.website"
                            value={newDistributor.contact.website}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Membres :
                        <input
                            type="number"
                            name="members"
                            value={newDistributor.members}
                            onChange={handleChange}
                        />
                    </label>
                    <button type="submit">
                        {editingDistributor ? "Modifier le Distributeur" : "Ajouter un Distributeur"}
                    </button>

                    <button type="button" onClick={handleCancel}>
                        Annuler
                    </button>
                </form>
            )}
        </div>
    );
};

export default AddDistributor;
