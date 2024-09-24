// AccountSummary.js
import React from "react";


const AccountSummary = ({ accounts }) => {
    // Calculer le nombre total de comptes
    const totalAccounts = accounts.reduce(
        (acc, currentAccount) => acc + currentAccount.members,
        0
    );

    return (
        <div className="account-status-summary-container">
            <h3>Total des Utilisateurs</h3>
            <div className="status-box">
                <p className="count">{totalAccounts}</p>
                <p className="status-type">Total Accounts</p>
            </div>
        </div>
    );
};

export default AccountSummary;
