// AccountList.js
import React, { useState } from "react";
import "../styles/AccountList.css"; // Import du fichier de style
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import AccountSummary from "./AccountSummary";
import AccountVerificationSummary from "./AccountVerificationSummary";
import AccountStatusSummary from "./AccountStatusSummary"; // Import du nouveau composant
import accountData from "../data/accountData";
import PieChart from "./PieChart";

const AccountList = () => {
    // État pour stocker le terme de recherche
    const [searchTerm, setSearchTerm] = useState("");

    // Utilisation de données factices pour le moment
    const accounts = accountData;

    // Filtrer les comptes en fonction du terme de recherche
    const filteredAccounts = accounts.filter((account) =>
        account.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Gérer la vérification des comptes
    const handleVerification = () => {
        // Logique de vérification des comptes (à remplacer par une requête au backend)
        alert("Vérification en cours...");
    };

    // Gérer le changement d'abonnement
    const handleChangeSubscription = () => {
        // Logique de changement d'abonnement (à remplacer par une requête au backend)
        alert("Changement d'abonnement !");
    };

    // Gérer la suspension des comptes
    const handleSuspend = () => {
        // Logique de suspension des comptes (à remplacer par une requête au backend)
        alert("Comptes suspendus !");
    };

    // Fonction pour gérer le changement de la case à cocher
    const handleCheckboxChange = (accountName) => {
        // Logique pour traiter le changement de la case à cocher (à remplacer par une requête au backend)
        alert(`La case à cocher du compte ${accountName} a été modifiée !`);
    };

    return (
        <div className="account-list-container">
            <h3>Mawzi Users</h3>

            <div className="search-bar">
                {/* Barre de recherche */}
                <FontAwesomeIcon icon={faSearch} />
                <input
                    type="text"
                    placeholder="Rechercher un compte..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button onClick={handleVerification}>Vérifier</button>
                <button onClick={handleChangeSubscription}>Changer Abonnement</button>

                {/* Ajout du bouton de suspension */}
                <button onClick={handleSuspend}>Suspendre</button>
            </div>

            {/* Tableau de comptes filtré */}
            <table>
                <thead>
                <tr>
                    <th>Coucher</th>
                    <th>Account Name</th>
                    <th>Members</th>
                    <th>Account Type</th>
                    <th>Email</th>
                    <th>Verification Status</th>
                    <th>Subscription Status</th>
                    <th>Subscription Type</th>
                </tr>
                </thead>
                <tbody>
                {filteredAccounts.map((account, index) => (
                    <tr key={index}>
                        <td>
                            {/* Case à cocher avec gestion du changement */}
                            <input
                                type="checkbox"
                                onChange={() => handleCheckboxChange(account.name)}
                            />
                        </td>
                        <td>{account.name}</td>
                        <td>{account.members}</td>
                        <td>{account.type}</td>
                        <td>{account.email}</td>
                        <td>{account.verificationStatus}</td>
                        <td>{account.subscriptionStatus}</td>
                        <td>{account.subscriptionType}</td>
                    </tr>
                ))}
                </tbody>
            </table>

            {/* Utilisation du nouveau composant */}
            <div className="flex-container">
                <AccountSummary accounts={accounts} />
                <PieChart />
                <AccountVerificationSummary accounts={accounts} />
                <AccountStatusSummary accounts={accounts} />
            </div>
        </div>
    );
};

export default AccountList;
