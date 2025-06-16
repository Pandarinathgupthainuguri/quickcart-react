import React from 'react';

const Footer = () => {
    return (
        <footer className="footer bg-dark text-light py-4 mt-4" style={{ zIndex: '-50', bottom: '0', left: '0' }}>
            <div className="container">
                <div className="row">

                    {/* Column 1 */}
                    <div className="col-md-4 col-sm-6 mb-3">
                        <h5>About Us</h5>
                        <p>We provide the best products with fast delivery and top-notch support. Trust us for a smooth shopping experience.</p>
                    </div>

                    {/* Column 2 */}
                    <div className="col-md-4 col-sm-6 mb-3">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="footer-link">Home</a></li>
                            <li><a href="#" className="footer-link">Products</a></li>
                            <li><a href="#" className="footer-link">Contact</a></li>
                            <li><a href="#" className="footer-link">Privacy Policy</a></li>
                        </ul>
                    </div>

                    {/* Column 3 */}
                    <div className="col-md-4 col-sm-12 mb-3">
                        <h5>Contact</h5>
                        <p>Email: support@example.com</p>
                        <p>Phone: +91 9876543210</p>
                        <p>Location: Chaibasa, India</p>
                    </div>

                </div>

                <hr className="border-light" />
                <p className="text-center small mb-0">© {new Date().getFullYear()} Your Company. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
