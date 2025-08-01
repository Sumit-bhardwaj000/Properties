import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

function SellPropertyForm() {
  const location = useLocation();
  const propertyType = location.state?.propertyType || "House";

  const [formData, setFormData] = useState({
    location: "",
    price: "",
    bedrooms: "",
    bathrooms: "",
    area: "",
    photo: null,
  });

  const [properties, setProperties] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const fetchProperties = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/sell");
      setProperties(res.data);
    } catch (err) {
      console.error("Error fetching properties", err);
    }
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("location", formData.location);
    data.append("price", formData.price);
    data.append("bedrooms", formData.bedrooms);
    data.append("bathrooms", formData.bathrooms);
    data.append("area", formData.area);
    data.append("propertyType", propertyType);
    if (formData.photo) data.append("photo", formData.photo);

    try {
      if (editingId) {
        await axios.put(`http://localhost:5000/api/sell/${editingId}`, data);
      } else {
        await axios.post("http://localhost:5000/api/sell", data);
      }
      setFormData({
        location: "",
        price: "",
        bedrooms: "",
        bathrooms: "",
        area: "",
        photo: null,
      });
      setEditingId(null);
      fetchProperties();
    } catch (err) {
      console.error("Error submitting property:", err);
    }
  };

  const handleEdit = (property) => {
    setFormData({
      location: property.location,
      price: property.price,
      bedrooms: property.bedrooms,
      bathrooms: property.bathrooms,
      area: property.area,
      photo: null, // don’t load image again
    });
    setEditingId(property.id);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/sell/${id}`);
      fetchProperties();
    } catch (err) {
      console.error("Error deleting property", err);
    }
  };

  return (
    <div className="container py-4">
      <h2>{editingId ? "Update" : "Sell"} Property - {propertyType}</h2>
      <form onSubmit={handleSubmit} className="row g-3">
        <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange} required className="form-control" />
        <input type="number" name="price" placeholder="Price" value={formData.price} onChange={handleChange} required className="form-control" />
        <input type="number" name="bedrooms" placeholder="Bedrooms" value={formData.bedrooms} onChange={handleChange} required className="form-control" />
        <input type="number" name="bathrooms" placeholder="Bathrooms" value={formData.bathrooms} onChange={handleChange} required className="form-control" />
        <input type="number" name="area" placeholder="Area (sq ft)" value={formData.area} onChange={handleChange} required className="form-control" />
        <input type="file" name="photo" accept="image/*" onChange={handleChange} className="form-control" />
        <button type="submit" className="btn btn-primary w-100">
          {editingId ? "Update" : "Add"} Property
        </button>
      </form>

      <hr />
      <h3 className="mt-4">🏷️ Listed Properties for Sale</h3>
      {properties.length === 0 ? (
        <p>No properties listed yet.</p>
      ) : (
        <div className="row">
          {properties.map((property) => (
            <div key={property.id} className="col-md-4 mb-3">
              <div className="card">
                <img
                  src={`http://localhost:5000/uploads/${property.image}`}
                  className="card-img-top"
                  alt="property"
                  height={180}
                  style={{ objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5>{property.location}</h5>
                  <p>₹{property.price}</p>
                  <p>{property.bedrooms} Bed • {property.bathrooms} Bath • {property.area} sqft</p>
                  <button className="btn btn-sm btn-warning me-2" onClick={() => handleEdit(property)}>Edit</button>
                  <button className="btn btn-sm btn-danger" onClick={() => handleDelete(property.id)}>Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SellPropertyForm;
