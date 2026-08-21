export default function WhatsAppButton({ tripName }) {
  const phoneNumber = '254705744536';
  const message = `Hi, I want to go for the trip: ${tripName}`;
  const link = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="whatsapp-btn">
      Chat on WhatsApp
    </a>
  );
}