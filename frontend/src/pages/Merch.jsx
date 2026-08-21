import ImageCarousel from '../components/ImageCarousel';

const merchItems = [
  {
    id: 'merch-black',
    name: 'Roamwild Coozy Safaris Tee — Black',
    price: 'KES 900',
    description: 'Premium cotton branded tee in classic black. Comfortable fit, perfect for your next road trip.',
    images: [
      '/images/merch/black-1.jpg',
      '/images/merch/black-2.jpg',
    ],
  },
  {
    id: 'merch-white',
    name: 'Roamwild Coozy Safaris Tee — White',
    price: 'KES 900',
    description: 'Premium cotton branded tee in clean white. Comfortable fit, perfect for your next road trip.',
    images: [
      '/images/merch/white-1.jpg',
      '/images/merch/white-2.jpg',
    ],
  },
];

function MerchCard({ item }) {
  const phoneNumber = '254705744536';
  const message = `Hi, I would like to order: ${item.name}`;
  const link = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="trip-card">
      <ImageCarousel images={item.images} altBase={item.name} />
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p className="price">{item.price}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="whatsapp-btn">
        Order on WhatsApp
      </a>
    </div>
  );
}

export default function Merch() {
  return (
    <div className="page">
      <h1>Merchandise</h1>
      <p>Rep the brand with our branded tees — available in Black and White.</p>
      <main className="trip-grid">
        {merchItems.map(item => (
          <MerchCard key={item.id} item={item} />
        ))}
      </main>
    </div>
  );
}