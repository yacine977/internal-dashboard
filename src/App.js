// App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignIn from "./components/auth/SignIn";
import Dashboard from "./components/Dashboard";
import UserPanel from "./components/UserPanel";
import DistributorList from "./components/DistributorList";
import AddDistributor from "./components/AddDistributor";
import DentalClinicList from "./components/DentalClinicList"; // Import new component
import AddDentalClinic from "./components/AddDentalClinic"; // Import new component

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/user-panel" element={<UserPanel />} />
                <Route path="distributor-list" element={<DistributorList />} />
                <Route path="/add-distributor" element={<AddDistributor />} />
                <Route path="/dental-clinic-list" element={<DentalClinicList />} /> {/* New route for DentalClinicList */}
                <Route path="/add-dental-clinic" element={<AddDentalClinic />} /> {/* New route for AddDentalClinic */}
            </Routes>
        </Router>
    );
}

export default App;
