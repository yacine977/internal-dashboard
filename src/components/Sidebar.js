// Sidebar.js
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaUserFriends,
  FaList,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa"; // Import FaChevronLeft and FaChevronRight
import classNames from "classnames";
import "../styles/Sidebar.css";

// Composant fonctionnel représentant la barre latérale du tableau de bord
const Sidebar = () => {
  // État pour gérer la visibilité de la barre latérale
  const [sidebarVisible, setSidebarVisible] = useState(true);

  // Fonction pour basculer la visibilité de la barre latérale
  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div
      className={classNames("sidebar-container", {
        "sidebar-hidden": !sidebarVisible,
      })}
    >
      <div className="logo-container">
        {/* Bouton pour basculer la visibilité de la barre latérale */}
        <button className="toggle-sidebar-button" onClick={toggleSidebar}>
          {sidebarVisible ? <FaChevronLeft /> : <FaChevronRight />}
        </button>
        {/* Logo de la barre latérale */}
        <img src="/logo_sidebar.jpg" alt="Logo" className="logo_sidebar" />
      </div>
      {/* Liens de navigation vers différentes sections du tableau de bord */}
      <NavLink
        to={"/dashboard"}
        className="sidebar-link"
        activeClassName="active-link"
      >
        <FaHome className="sidebar-icon" />
        Dashboard
      </NavLink>
      <NavLink
        to={"/dashboard"}
        className="sidebar-link"
        activeClassName="active-link"
      >
        <FaUserFriends className="sidebar-icon" />
        Mawzi Users
      </NavLink>
      <NavLink
        to={"/distributor-list"}
        className="sidebar-link"
        activeClassName="active-link"
      >
        <FaList className="sidebar-icon" />
        Liste des distributeurs
      </NavLink>
      <NavLink
        to={"/dental-clinic-list"}
        className="sidebar-link"
        activeClassName="active-link"
      >
        <FaList className="sidebar-icon" />
        Liste des cliniques
      </NavLink>
    </div>
  );
};

export default Sidebar;
