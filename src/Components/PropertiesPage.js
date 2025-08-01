import React from 'react';
import { Container, Row, Col, Card, Button, Form, Pagination } from 'react-bootstrap';
import { FaBed, FaBath, FaRulerCombined, FaHeart, FaStar, FaSearch, FaFilter } from 'react-icons/fa';
import { FiMapPin } from 'react-icons/fi';
import { useState } from 'react';

const PropertiesPage = () => {
  const properties = [
    {
      id: 1,
      title: 'Luxury Penthouse with Ocean View',
      location: 'Mumbai, Maharashtra',
      price: '₹4.2 Cr',
      beds: 3,
      baths: 2,
      area: '2200 sq.ft',
      rating: 4.8,
      reviews: 42,
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      featured: true,
      type: 'Apartment'
    },
    {
      id: 2,
      title: 'Modern Villa with Private Pool',
      location: 'Bangalore, Karnataka',
      price: '₹3.5 Cr',
      beds: 4,
      baths: 3,
      area: '3200 sq.ft',
      rating: 4.9,
      reviews: 28,
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      featured: false,
      type: 'Villa'
    },
    {
      id: 3,
      title: 'Cozy Studio in City Center',
      location: 'Delhi',
      price: '₹65 Lakhs',
      beds: 1,
      baths: 1,
      area: '650 sq.ft',
      rating: 4.5,
      reviews: 36,
      image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      featured: false,
      type: 'Studio'
    },
    {
      id: 4,
      title: 'Heritage Bungalow with Garden',
      location: 'Pune, Maharashtra',
      price: '₹2.8 Cr',
      beds: 3,
      baths: 2,
      area: '2800 sq.ft',
      rating: 4.7,
      reviews: 19,
      image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      featured: true,
      type: 'Bungalow'
    },
    {
      id: 5,
      title: 'Contemporary Apartment with Terrace',
      location: 'Hyderabad, Telangana',
      price: '₹1.9 Cr',
      beds: 2,
      baths: 2,
      area: '1800 sq.ft',
      rating: 4.6,
      reviews: 31,
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      featured: false,
      type: 'Apartment'
    },
    {
      id: 6,
      title: 'Farmhouse with Scenic Views',
      location: 'Lonavala, Maharashtra',
      price: '₹5.5 Cr',
      beds: 5,
      baths: 4,
      area: '4800 sq.ft',
      rating: 4.9,
      reviews: 14,
      image: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      featured: true,
      type: 'Farmhouse'
    },
    {
      id: 7,
      title: 'Compact City Apartment',
      location: 'Chennai, Tamil Nadu',
      price: '₹75 Lakhs',
      beds: 1,
      baths: 1,
      area: '700 sq.ft',
      rating: 4.3,
      reviews: 22,
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      featured: false,
      type: 'Apartment'
    },
    {
      id: 8,
      title: 'Luxury Duplex Penthouse',
      location: 'Gurgaon, Haryana',
      price: '₹6.8 Cr',
      beds: 4,
      baths: 3,
      area: '3800 sq.ft',
      rating: 5.0,
      reviews: 8,
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      featured: true,
      type: 'Penthouse'
    }
  ];

  const [activePage, setActivePage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(properties.length / itemsPerPage);

  return (
    <div className="properties-page">
      {/* Hero Section */}
      <div className="properties-hero py-5">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h1 className="fw-bold mb-4">Find Your Dream Property</h1>
              <p className="lead mb-5">Browse our exclusive collection of premium properties across India</p>
              
              <Form className="search-form mb-4">
                <div className="search-input-group">
                  <Form.Control
                    type="text"
                    placeholder="Search by location, property type, or price"
                    className="py-3 px-4"
                  />
                  <Button variant="primary" className="search-btn">
                    <FaSearch className="me-2" /> Search
                  </Button>
                </div>
              </Form>
              
              <div className="filter-tags">
                <Button variant="outline-secondary" size="sm" className="me-2 mb-2">
                  <FaFilter className="me-1" /> Apartments
                </Button>
                <Button variant="outline-secondary" size="sm" className="me-2 mb-2">
                  <FaFilter className="me-1" /> Villas
                </Button>
                <Button variant="outline-secondary" size="sm" className="me-2 mb-2">
                  <FaFilter className="me-1" /> Under ₹1 Cr
                </Button>
                <Button variant="outline-secondary" size="sm" className="me-2 mb-2">
                  <FaFilter className="me-1" /> 3+ Beds
                </Button>
                <Button variant="outline-secondary" size="sm" className="me-2 mb-2">
                  <FaFilter className="me-1" /> New Listings
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Properties Grid */}
      <Container className="py-5">
        <Row className="mb-4">
          <Col>
            <h4 className="fw-bold">Showing {properties.length} properties</h4>
          </Col>
          <Col className="text-end">
            <Form.Select className="d-inline-block w-auto">
              <option>Sort by: Recommended</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest First</option>
              <option>Highest Rated</option>
            </Form.Select>
          </Col>
        </Row>

        <Row>
          {properties.map((property) => (
            <Col key={property.id} lg={4} md={6} className="mb-4">
              <Card className="property-card h-100 border-0 shadow-sm">
                <div className="property-image-container">
                  <Card.Img
                    variant="top"
                    src={property.image}
                    className="property-image"
                  />
                  {property.featured && (
                    <div className="featured-badge">Featured</div>
                  )}
                  <Button variant="light" className="favorite-btn">
                    <FaHeart />
                  </Button>
                </div>
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <span className="property-type">{property.type}</span>
                    <div className="property-rating">
                      <FaStar className="text-warning" />
                      <span className="ms-1">{property.rating}</span>
                      <span className="text-muted ms-1">({property.reviews})</span>
                    </div>
                  </div>
                  <Card.Title className="mb-2">{property.title}</Card.Title>
                  <Card.Text className="text-muted mb-3">
                    <FiMapPin className="me-1" /> {property.location}
                  </Card.Text>
                  <div className="property-details d-flex justify-content-between mb-3">
                    <div>
                      <FaBed className="me-1" /> {property.beds} Beds
                    </div>
                    <div>
                      <FaBath className="me-1" /> {property.baths} Baths
                    </div>
                    <div>
                      <FaRulerCombined className="me-1" /> {property.area}
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <h5 className="mb-0 text-primary fw-bold">{property.price}</h5>
                    <Button variant="outline-primary" size="sm">View Details</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Pagination */}
        <Row className="mt-4">
          <Col className="d-flex justify-content-center">
            <Pagination>
              <Pagination.Prev />
              <Pagination.Item active>{1}</Pagination.Item>
              <Pagination.Item>{2}</Pagination.Item>
              <Pagination.Next />
            </Pagination>
          </Col>
        </Row>
      </Container>

      {/* Newsletter Section */}
      <div className="bg-light py-5">
        <Container className="py-4">
          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              <h3 className="fw-bold mb-3">Get New Property Alerts</h3>
              <p className="text-muted mb-4">Sign up to receive notifications when new properties matching your criteria hit the market</p>
              <Form className="d-flex justify-content-center">
                <Form.Control
                  type="email"
                  placeholder="Your email address"
                  className="w-50 me-2 py-3"
                />
                <Button variant="primary" className="px-4 py-3">
                  Subscribe
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .properties-page {
          background-color: #f8f9fa;
        }
        
        .properties-hero {
          background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), 
                      url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
          background-size: cover;
          background-position: center;
          color: white;
        }
        
        .search-input-group {
          display: flex;
          border-radius: 50px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }
        
        .search-input-group .form-control {
          border: none;
          border-radius: 0;
          padding-left: 25px;
        }
        
        .search-input-group .search-btn {
          border-radius: 0 50px 50px 0;
          padding: 0 25px;
          white-space: nowrap;
        }
        
        .property-card {
          transition: all 0.3s ease;
          border-radius: 10px;
          overflow: hidden;
        }
        
        .property-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }
        
        .property-image-container {
          position: relative;
          height: 220px;
          overflow: hidden;
        }
        
        .property-image {
          height: 100%;
          width: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        
        .property-card:hover .property-image {
          transform: scale(1.05);
        }
        
        .featured-badge {
          position: absolute;
          top: 15px;
          left: 15px;
          background: #ff6b6b;
          color: white;
          padding: 5px 10px;
          border-radius: 4px;
          font-size: 12px;
          font-weight: bold;
        }
        
        .favorite-btn {
          position: absolute;
          top: 15px;
          right: 15px;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,0.9);
          color: #495057;
          border: none;
        }
        
        .favorite-btn:hover {
          color: #dc3545;
        }
        
        .property-type {
          font-size: 14px;
          color: #6c757d;
          font-weight: 500;
        }
        
        .property-rating {
          display: flex;
          align-items: center;
          font-size: 14px;
        }
        
        .property-details {
          font-size: 14px;
          color: #495057;
          padding: 8px 0;
          border-top: 1px solid #eee;
          border-bottom: 1px solid #eee;
        }
        
        .filter-tags {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }
      `}</style>
    </div>
  );
};

export default PropertiesPage;