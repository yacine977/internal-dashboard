// accountData.js

// Données d'exemple pour différents comptes
const accountData = [
    {
        name: "Dental Quality",
        type: "Distributor",
        email: "support@dentalquality.be",
        verificationStatus: "Verified", // Statut de vérification
        subscriptionStatus: "OK", // Statut d'abonnement
        subscriptionType: "Basic", // Type d'abonnement
        contact: {
            phoneNumber: "+3212345678",
            address: "123 Main Street, City, Country",
            website: "www.dentalquality.be",
        },
        members: 4, // Nombre de membres
    },
    {
        name: "Smiles by Maria - Uccle",
        type: "Clinic",
        email: "hello@smilesbymaria.com",
        verificationStatus: "Pending", // Statut de vérification en attente
        subscriptionStatus: "OK",
        subscriptionType: "Prime",
        contact: {
            phoneNumber: "+3212345678",
            address: "456 Oak Street, Uccle, Country",
            website: "www.smilesbymaria.com",
        },
        members: 3,
    },
    {
        name: "Cattani",
        type: "Manufacturer",
        email: "info@cattani.com",
        verificationStatus: "Pending",
        subscriptionStatus: "OK",
        subscriptionType: "Basic",
        contact: {
            phoneNumber: "+3212345678",
            address: "789 Pine Street, Manufacturer City, Country",
            website: "www.cattani.com",
        },
        members: 2,
    },
    {
        name: "U-Dental – Utretch",
        type: "Distributor",
        email: "sales@udental.nl",
        verificationStatus: "Verified",
        subscriptionStatus: "Suspended", // Abonnement suspendu
        subscriptionType: "Prime",
        contact: {
            phoneNumber: "+3212345678",
            address: "321 Elm Street, Utretch, Country",
            website: "www.udental.nl",
        },
        members: 8,
    },
];

export default accountData;
