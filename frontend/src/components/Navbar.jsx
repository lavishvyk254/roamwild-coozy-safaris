import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo-link">
        <img src="/images/brand/logo.jpg" alt="Roamwild Coozy Safaris" className="logo-img" />
      </Link>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/trips">Trips</Link>
        <Link to="/about">About</Link>
        <Link to="/impact">Impact</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/van-hire">Van Hire</Link>
        <Link to="/merch">Merch</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}