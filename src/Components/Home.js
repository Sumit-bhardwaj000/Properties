import React from 'react';
import { Container, Row, Col, Button, Card, Form, Navbar, Nav } from 'react-bootstrap';
import { FaSearch, FaHome, FaDollarSign, FaUsers, FaMapMarkerAlt, FaBed, FaBath, FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Home = () => {
    const properties = [
        {
            id: 1,
            title: 'Modern 3 BHK Apartment',
            location: 'Mumbai, Maharashtra',
            price: '₹85 Lakhs',
            beds: 3,
            baths: 2,
            img: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        },
        {
            id: 2,
            title: 'Luxury Villa with Garden',
            location: 'Bangalore, Karnataka',
            price: '₹2.5 Cr',
            beds: 4,
            baths: 3,
            img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        },
        {
            id: 3,
            title: 'Affordable Studio Apartment',
            location: 'Pune, Maharashtra',
            price: '₹40 Lakhs',
            beds: 1,
            baths: 1,
            img: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        }
    ];

    return (
        <div className="home-page">
            {/* Navbar with better styling */}
            <Navbar bg="white" expand="lg" className="shadow-sm py-3 sticky-top">
                <Container>
                    <Navbar.Brand href="/" className="fw-bold text-primary fs-3">
                        <FaHome className="me-2" /> PropFinder
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto me-4">
                            <Nav.Link href="/" className="fw-semibold">Home</Nav.Link>
                            <Nav.Link href="/properties" className="fw-semibold">Properties</Nav.Link>
                            <Nav.Link href="/about" className="fw-semibold">About</Nav.Link>
                            <Nav.Link href="/contact" className="fw-semibold">Contact</Nav.Link>
                        </Nav>
                        <Link to="/login" className="btn btn-primary px-4 fw-semibold">
                            Login
                        </Link>

                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* Hero Section with proper background image */}
            <div className="hero-section text-white" style={{
                backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '70vh',
                display: 'flex',
                alignItems: 'center',
                padding: '2rem 0'
            }}>
                <Container className="text-center">
                    <h1 className="display-4 fw-bold mb-4">Find Your Dream Home</h1>
                    <p className="lead mb-5">Discover the perfect property that matches your lifestyle</p>
                    <Form className="d-flex mx-auto" style={{ maxWidth: '600px' }}>
                        <Form.Control
                            type="text"
                            placeholder="Search by location, property type, or price range"
                            className="py-3 px-4 rounded-start"
                        />
                        <Button variant="primary" className="px-4 rounded-end">
                            <FaSearch className="me-2" /> Search
                        </Button>
                    </Form>
                </Container>
            </div>

            {/* Property Listings with better cards */}
            <Container className="my-5 py-5">
                <div className="text-center mb-5">
                    <h2 className="fw-bold mb-3">Featured Properties</h2>
                    <p className="text-muted">Explore our handpicked selection of premium properties</p>
                </div>
                <Row>
                    {properties.map((property) => (
                        <Col key={property.id} lg={4} md={6} className="mb-4">
                            <Card className="h-100 border-0 shadow-sm hover-effect">
                                <div style={{ position: 'relative' }}>
                                    <Card.Img
                                        variant="top"
                                        src={property.img}
                                        style={{
                                            height: '250px',
                                            objectFit: 'cover',
                                            borderTopLeftRadius: '0.375rem',
                                            borderTopRightRadius: '0.375rem'
                                        }}
                                    />
                                    <Button
                                        variant="light"
                                        className="position-absolute top-0 end-0 m-3 rounded-circle p-2"
                                        style={{ width: '40px', height: '40px' }}
                                    >
                                        <FaHeart className="text-danger" />
                                    </Button>
                                </div>
                                <Card.Body>
                                    <Card.Title className="fw-bold">{property.title}</Card.Title>
                                    <Card.Text className="text-muted mb-3">
                                        <FaMapMarkerAlt className="me-1 text-primary" /> {property.location}
                                    </Card.Text>
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <div>
                                            <span className="me-3">
                                                <FaBed className="me-1 text-primary" /> {property.beds}
                                            </span>
                                            <span>
                                                <FaBath className="me-1 text-primary" /> {property.baths}
                                            </span>
                                        </div>
                                        <h5 className="mb-0 text-primary fw-bold">{property.price}</h5>
                                    </div>
                                </Card.Body>
                                <Card.Footer className="bg-white border-0 pt-0">
                                    
                                </Card.Footer>
                            </Card>
                        </Col>
                    ))}
                </Row>
                <div className="text-center mt-4">
                     <Link to="/propertiespage" className="btn btn-primary px-4 fw-semibold">
                            see all properties
                        </Link>
                </div>
            </Container>

            {/* Services Section with icons */}
            <div className="py-5 bg-light">
                <Container className="py-5">
                    <div className="text-center mb-5">
                        <h2 className="fw-bold mb-3">Our Services</h2>
                        <p className="text-muted">Everything you need to find your perfect home</p>
                    </div>
                    <Row>
                        <Col lg={4} className="mb-4">
                            <div className="text-center p-4 h-100 bg-white rounded shadow-sm">
                                <div className="icon-box bg-primary-light mb-4 mx-auto">
                                    <FaHome size={24} className="text-primary" />
                                </div>
                                <h4 className="fw-bold mb-3">Property Search</h4>
                                <p className="text-muted">
                                    Access thousands of verified listings with detailed information and high-quality images.
                                </p>
                            </div>
                        </Col>
                        <Col lg={4} className="mb-4">
                            <div className="text-center p-4 h-100 bg-white rounded shadow-sm">
                                <div className="icon-box bg-success-light mb-4 mx-auto">
                                    <FaDollarSign size={24} className="text-success" />
                                </div>
                                <h4 className="fw-bold mb-3">Valuation</h4>
                                <p className="text-muted">
                                    Get accurate market valuations and price trends for any property in India.
                                </p>
                            </div>
                        </Col>
                        <Col lg={4} className="mb-4">
                            <div className="text-center p-4 h-100 bg-white rounded shadow-sm">
                                <div className="icon-box bg-warning-light mb-4 mx-auto">
                                    <FaUsers size={24} className="text-warning" />
                                </div>
                                <h4 className="fw-bold mb-3">Expert Advice</h4>
                                <p className="text-muted">
                                    Consult with our property experts to make informed decisions about your investment.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Call to Action Section */}
            <div className="py-5 bg-primary text-white">
                <Container className="py-5 text-center">
                    <h2 className="fw-bold mb-4">Ready to find your dream home?</h2>
                    <p className="lead mb-5">Join thousands of satisfied customers who found their perfect property with us</p>
                    <Button variant="light" size="lg" className="px-5 fw-bold text-primary me-3">Get Started</Button>
                    <Button variant="outline-light" size="lg" className="px-5 fw-bold">Contact Us</Button>
                </Container>
            </div>

            {/* Footer with more links */}
            <footer className="bg-dark text-white py-5">
                <Container>
                    <Row>
                        <Col lg={4} className="mb-4">
                            <h4 className="fw-bold mb-4">
                                <FaHome className="me-2" /> PropFinder
                            </h4>
                            <p className="text-muted">
                                India's leading real estate platform helping you find, buy and sell properties with ease.
                            </p>
                        </Col>
                        <Col lg={2} className="mb-4">
                            <h5 className="fw-bold mb-4">Quick Links</h5>
                            <ul className="list-unstyled">
                                <li className="mb-2"><a href="/" className="text-white text-decoration-none">Home</a></li>
                                <li className="mb-2"><a href="/properties" className="text-white text-decoration-none">Properties</a></li>
                                <li className="mb-2"><a href="/agents" className="text-white text-decoration-none">Agents</a></li>
                                <li className="mb-2"><a href="/blog" className="text-white text-decoration-none">Blog</a></li>
                            </ul>
                        </Col>
                        <Col lg={2} className="mb-4">
                            <h5 className="fw-bold mb-4">Company</h5>
                            <ul className="list-unstyled">
                                <li className="mb-2"><a href="/about" className="text-white text-decoration-none">About Us</a></li>
                                <li className="mb-2"><a href="/careers" className="text-white text-decoration-none">Careers</a></li>
                                <li className="mb-2"><a href="/contact" className="text-white text-decoration-none">Contact</a></li>
                                <li className="mb-2"><a href="/press" className="text-white text-decoration-none">Press</a></li>
                            </ul>
                        </Col>
                        <Col lg={4} className="mb-4">
                            <h5 className="fw-bold mb-4">Newsletter</h5>
                            <p className="text-muted mb-3">Subscribe to get updates on new properties</p>
                            <Form className="d-flex">
                                <Form.Control
                                    type="email"
                                    placeholder="Your email"
                                    className="rounded-0"
                                />
                                <Button variant="light" className="rounded-0">
                                    Subscribe
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                    <hr className="my-4" />
                    <Row>
                        <Col md={6} className="mb-3 mb-md-0">
                            <p className="mb-0">&copy; {new Date().getFullYear()} PropFinder. All rights reserved.</p>
                        </Col>
                        <Col md={6} className="text-md-end">
                            <a href="/privacy" className="text-white me-3 text-decoration-none">Privacy Policy</a>
                            <a href="/terms" className="text-white me-3 text-decoration-none">Terms of Service</a>
                            <a href="/sitemap" className="text-white text-decoration-none">Sitemap</a>
                        </Col>
                    </Row>
                </Container>
            </footer>

            {/* Add some custom styles */}
            <style>{`
                .hover-effect {
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }
                .hover-effect:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
                }
                .icon-box {
                    width: 60px;
                    height: 60px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                }
                .bg-primary-light {
                    background-color: rgba(13, 110, 253, 0.1);
                }
                .bg-success-light {
                    background-color: rgba(25, 135, 84, 0.1);
                }
                .bg-warning-light {
                    background-color: rgba(255, 193, 7, 0.1);
                }
            `}</style>
        </div>
    );
};

export default Home;