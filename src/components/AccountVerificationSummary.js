// AccountVerificationSummary.js
import React from "react";
import "../styles/AccountComponentsStyles.css";

const AccountVerificationSummary = ({ accounts }) => {
    // Filtrer les comptes non vérifiés
    const unverifiedAccounts = accounts.filter(account => account.verificationStatus === "Pending");

    return (
        <div className="account-status-summary-container">
            <h3>Vérifications en attente</h3>
            <div className="status-box">
                <p className="count">{unverifiedAccounts.length}</p>
                <p className="status-type">Unverified Accounts</p>
            </div>
        </div>
    );
};

export default AccountVerificationSummary;
