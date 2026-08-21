import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="hero">
      <h1 className="brand-name">Roamwild Coozy Safaris</h1>
      <p className="tagline">Budget-friendly, social road trips & adventures with purpose</p>
      <div className="hero-buttons">
        <Link to="/trips" className="btn-primary">View Upcoming Trips</Link>
        <Link to="/van-hire" className="btn-secondary">Van Hire</Link>
      </div>
    </div>
  );
}