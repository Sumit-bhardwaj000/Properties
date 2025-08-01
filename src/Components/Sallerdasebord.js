import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Sallerdasebord.css";
import {
  FaHome,
  FaHotel,
  FaBuilding,
  FaWarehouse,
  FaTree,
  FaKey,
  FaBed,
  FaDoorOpen,
} from "react-icons/fa";

const propertyOptions = [
  { label: "Home", icon: <FaHome />, description: "Manage or list residential homes.", path: "/SellPropertyForm" },
  { label: "Villa", icon: <FaHotel />, description: "Add luxury villa listings.", path: "/SellPropertyForm" },
  { label: "Apartment", icon: <FaBuilding />, description: "Modern apartments in cities.", path: "/SellPropertyForm" },
  { label: "Flat", icon: <FaWarehouse />, description: "Post flats in residential areas.", path: "/SellPropertyForm" },
  { label: "House", icon: <FaHome />, description: "Standalone family houses.", path: "/SellPropertyForm" },
  { label: "Farm", icon: <FaTree />, description: "Rural properties and farmland.", path: "/RentPropertyForm" },
  { label: "House for Rent", icon: <FaKey />, description: "Rental house listings.", path: "/RentPropertyForm" },
  { label: "Paying Guest", icon: <FaBed />, description: "PG listings for students.", path: "/RentPropertyForm" },
  { label: "Room for Rent", icon: <FaDoorOpen />, description: "Room rental listings.", path: "/RentPropertyForm" },
];

function Sallerdasebord() {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">🏡 Seller Dashboard</h1>
      <p className="dashboard-desc">
        Welcome to your Seller Dashboard! Manage your listings by category.
      </p>

      <div className="card-grid">
        {propertyOptions.map((option, index) => (
          <Link
            key={index}
            to={option.path}
            state={{ propertyType: option.label }}
            className="link-card"
          >
            <div className="property-card">
              <div className="icon">{option.icon}</div>
              <div className="label">{option.label}</div>
              <div className="card-description">{option.description}</div>
            </div>
          </Link>
        ))}
      </div>

      <div className="text-center mt-5">
        <button className="btn btn-outline-primary" onClick={() => navigate("/")}>
          ← Back to Home
        </button>
      </div>
    </div>
  );
}

export default Sallerdasebord;
