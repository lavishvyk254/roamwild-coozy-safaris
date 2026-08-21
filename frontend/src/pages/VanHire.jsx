import ImageCarousel from '../components/ImageCarousel';

const fleet = [
  {
    id: 'van-10-seater',
    name: '10 Seater Van',
    price: 'Varies by destination & number of days',
    description: 'Compact and comfortable — great for small group trips and custom itineraries.',
    images: [
      '/images/fleet/van10-1.jpg',
      '/images/fleet/van10-2.jpg',
      '/images/fleet/van10-3.jpg',
      '/images/fleet/van10-4.jpg',
      '/images/fleet/van10-5.jpg',
      '/images/fleet/van10-6.jpg',
      '/images/fleet/van10-7.jpg',
    ],
  },
  {
    id: 'comfort-tour-bus',
    name: 'Comfort Tour Bus (22–28 Seater)',
    price: 'KES 22,000',
    description: 'Rates vary depending on the destination and pick up point. Ideal for larger groups and organized outings.',
    images: [
      '/images/fleet/comfortbus-1.jpg',
      '/images/fleet/comfortbus-2.jpg',
      '/images/fleet/comfortbus-3.jpg',
      '/images/fleet/comfortbus-4.jpg',
      '/images/fleet/comfortbus-5.jpg',
      '/images/fleet/comfortbus-6.jpg',
      '/images/fleet/comfortbus-7.jpg',
    ],
  },
  {
    id: 'van-7-seater',
    name: '7 Seater Van',
    price: 'Varies by destination & number of days',
    description: 'A flexible option for small group travel and shorter trips.',
    images: [
      '/images/fleet/van7-1.jpg',
      '/images/fleet/van7-2.jpg',
    ],
  },
  {
    id: 'van-14-seater',
    name: '14 Seater Van',
    price: 'Varies by destination & number of days',
    description: 'Roomy option for medium-sized groups heading out on the road.',
    images: [
      '/images/fleet/van14-1.jpg',
      '/images/fleet/van14-2.jpg',
    ],
  },
  {
    id: 'tour-van-7-seater',
    name: 'Tour Van (7 Seater)',
    price: 'KES 19,000',
    description: 'Suitable for game drives, hotel transfers, and road trips within and across the borders.',
    images: [
      '/images/fleet/tourvan-1.jpg',
      '/images/fleet/tourvan-2.jpg',
      '/images/fleet/tourvan-3.jpg',
      '/images/fleet/tourvan-4.jpg',
    ],
  },
  {
    id: 'luxury-14-seater',
    name: 'Luxury 14 Seater Van',
    price: 'Varies by destination & number of days',
    description: 'Premium comfort for group travel — perfect for special occasions and longer journeys.',
    images: [
      '/images/fleet/luxury14-1.jpg',
      '/images/fleet/luxury14-2.jpg',
      '/images/fleet/luxury14-3.jpg',
      '/images/fleet/luxury14-4.jpg',
      '/images/fleet/luxury14-5.jpg',
    ],
  },
];

function VehicleCard({ vehicle }) {
  const phoneNumber = '254705744536';
  const message = `Hi, I would like a quote for the ${vehicle.name}.`;
  const link = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="trip-card">
      <ImageCarousel images={vehicle.images} altBase={vehicle.name} />
      <h3>{vehicle.name}</h3>
      <p>{vehicle.description}</p>
      <p className="price">{vehicle.price}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="whatsapp-btn">
        Get a Quote on WhatsApp
      </a>
    </div>
  );
}

export default function VanHire() {
  return (
    <div className="page">
      <h1>Van Hire Services</h1>
      <p>
        Beyond our scheduled group packages, we offer affordable and verified
        private van hire services out of Nairobi for customized group travel.
        Browse our fleet below and message us for a quote.
      </p>

      <main className="trip-grid">
        {fleet.map((vehicle) => (
          <VehicleCard key={vehicle.id} vehicle={vehicle} />
        ))}
      </main>
    </div>
  );
}