import WhatsAppButton from './WhatsAppButton';

export default function TripCard({ trip }) {
  const today = new Date();
  const tripDate = new Date(trip.date);
  const isPast = tripDate < today.setHours(0, 0, 0, 0);

  const formattedDate = tripDate.toLocaleDateString('en-KE', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className={`trip-card ${isPast ? 'past-trip' : ''}`}>
      <div className="image-wrapper">
        <img src={trip.image} alt={trip.name} />
        <span className={`status-badge ${isPast ? 'badge-past' : 'badge-upcoming'}`}>
          {isPast ? 'Trip Ended' : 'Upcoming'}
        </span>
      </div>

      <h3>{trip.name}</h3>
      <p className="date">{formattedDate}</p>
      <p>{trip.description}</p>
      <p className="price">{trip.price}</p>

      {isPast ? (
        <button className="disabled-btn" disabled>
          Trip Already Happened
        </button>
      ) : (
        <WhatsAppButton tripName={trip.name} />
      )}
    </div>
  );
}