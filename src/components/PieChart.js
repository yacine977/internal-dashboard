// PieChart.js
import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import accountData from "../data/accountData"; // Assurez-vous d'importer correctement le fichier accountData
import "../styles/PieChart.css";

// Composant fonctionnel représentant un diagramme en secteurs affichant les pourcentages de comptes "Primes" et "Classiques"
const PieChart = () => {
    // État pour stocker les données des comptes
    const [accounts, setAccounts] = useState([]);

    // Référence pour le canvas du diagramme
    const chartRef = useRef(null);

    useEffect(() => {
        // Utilisez le fichier de données au lieu de fetchDataFromApi
        // Assurez-vous que accountData contient les données nécessaires
        setAccounts(accountData);
    }, []); // Assurez-vous que le tableau de dépendances est vide pour s'assurer que le chargement n'est effectué qu'une fois

    useEffect(() => {
        // Filtrer les comptes "primes"
        const primeAccounts = accounts.filter((account) => account.subscriptionType === "Prime");

        // Calculer les pourcentages
        const totalAccounts = accounts.length;
        const primePercentage = (primeAccounts.length / totalAccounts) * 100;
        const classicPercentage = 100 - primePercentage;

        // Détruire le graphique existant (si disponible)
        if (chartRef.current) {
            const chartInstance = Chart.getChart(chartRef.current);
            if (chartInstance) {
                chartInstance.destroy();
            }
        }

        // Créer le nouveau diagramme
        const ctx = chartRef.current.getContext("2d");
        new Chart(ctx, {
            type: "doughnut",
            data: {
                labels: ["Primes", "Classiques"],
                datasets: [
                    {
                        data: [primePercentage, classicPercentage],
                        backgroundColor: ["#36a2eb", "#fc6c6e"],
                    },
                ],
            },
        });
    }, [accounts, chartRef]); // Ajouter chartRef comme dépendance

    return (
        <div className="pie-chart-container">
            {/* Canvas pour le diagramme */}
            <canvas ref={chartRef} width="200" height="200"></canvas>
        </div>
    );
};

export default PieChart;
