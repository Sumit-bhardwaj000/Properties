import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom"; // 🧭 Added useLocation

function RentPropertyForm() {
  const navigate = useNavigate();
  const locationData = useLocation(); // 📦 Get route state
  const propertyType = locationData.state?.propertyType || "Property"; // 🏷️ Default fallback

  const [formData, setFormData] = useState({
    location: "",
    rent: "",
    bedroom: "",
    bathroom: "",
    area: "",
    photo: null,
  });

  const [rentalList, setRentalList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "photo") {
      setFormData({ ...formData, photo: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      const updatedList = [...rentalList];
      updatedList[editIndex] = formData;
      setRentalList(updatedList);
      setEditIndex(null);
    } else {
      setRentalList([...rentalList, formData]);
    }

    setFormData({
      location: "",
      rent: "",
      bedroom: "",
      bathroom: "",
      area: "",
      photo: null,
    });
  };

  const handleEdit = (index) => {
    setFormData(rentalList[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedList = [...rentalList];
    updatedList.splice(index, 1);
    setRentalList(updatedList);
  };

  return (
    <div className="container mt-5 mb-5 p-4 border rounded shadow bg-white">
      <button className="btn btn-secondary mb-3" onClick={() => navigate(-1)}>
        ← Go Back
      </button>

      <h2 className="mb-4 text-center">
        🏘️ Rent Out Your {propertyType}
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Location</label>
          <input
            type="text"
            name="location"
            className="form-control"
            value={formData.location}
            onChange={handleChange}
            placeholder="Enter colony, city or state"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Monthly Rent (₹)</label>
          <input
            type="number"
            name="rent"
            className="form-control"
            value={formData.rent}
            onChange={handleChange}
            placeholder="Rent amount"
          />
        </div>

        <div className="row mb-3">
          <div className="col-md-4">
            <label className="form-label">Bedroom</label>
            <select
              name="bedroom"
              className="form-select"
              value={formData.bedroom}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3+">3+</option>
            </select>
          </div>
          <div className="col-md-4">
            <label className="form-label">Bathroom</label>
            <select
              name="bathroom"
              className="form-select"
              value={formData.bathroom}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3+">3+</option>
            </select>
          </div>
          <div className="col-md-4">
            <label className="form-label">Area (sqft)</label>
            <input
              type="number"
              name="area"
              className="form-control"
              value={formData.area}
              onChange={handleChange}
              placeholder="Enter area"
            />
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Upload Photo</label>
          <input
            type="file"
            name="photo"
            className="form-control"
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-success w-100">
          {editIndex !== null ? "Update Property" : "Add for Rent"}
        </button>
      </form>

      <hr className="my-5" />

      <h4 className="mb-3">📃 Listed Rental Properties</h4>
      {rentalList.length === 0 ? (
        <p className="text-muted">No rental properties added yet.</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered align-middle">
            <thead className="table-light">
              <tr>
                <th>Photo</th>
                <th>Location</th>
                <th>Rent</th>
                <th>Bed</th>
                <th>Bath</th>
                <th>Area</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {rentalList.map((prop, index) => (
                <tr key={index}>
                  <td>
                    {prop.photo ? (
                      <img
                        src={URL.createObjectURL(prop.photo)}
                        alt="property"
                        width={80}
                        height={60}
                        style={{ objectFit: "cover" }}
                      />
                    ) : (
                      "No image"
                    )}
                  </td>
                  <td>{prop.location}</td>
                  <td>₹{prop.rent}/month</td>
                  <td>{prop.bedroom}</td>
                  <td>{prop.bathroom}</td>
                  <td>{prop.area} sqft</td>
                  <td>
                    <button
                      className="btn btn-warning btn-sm me-2"
                      onClick={() => handleEdit(index)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default RentPropertyForm;
