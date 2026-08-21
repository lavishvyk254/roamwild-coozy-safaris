import { useEffect, useState } from 'react';
import TripCard from '../components/TripCard';

export default function Trips() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    fetch('https://roamwild-backend.onrender.com/api/trips')
      .then(res => res.json())
      .then(data => setTrips(data))
      .catch(err => console.error('Error fetching trips:', err));
  }, []);

  return (
    <div className="page">
      <h1>Upcoming Trips</h1>
      <main className="trip-grid">
        {trips.map(trip => (
          <TripCard key={trip.id} trip={trip} />
        ))}
      </main>
    </div>
  );
}