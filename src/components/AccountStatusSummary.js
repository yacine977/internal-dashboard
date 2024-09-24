// AccountStatusSummary.js
import React from "react";

const AccountStatusSummary = ({ accounts }) => {
    // Filtrer les comptes bloqués ou suspendus
    const suspendedAccounts = accounts.filter(
        (account) => account.subscriptionStatus === "Suspended"
    );

    return (
        <div className="account-status-summary-container">
            <h3>Comptes Bloqués</h3>
            <div className="status-box">
                <p className="count">{suspendedAccounts.length}</p>
                <p className="status-type">Suspended Accounts</p>
            </div>
        </div>
    );
};

export default AccountStatusSummary;
