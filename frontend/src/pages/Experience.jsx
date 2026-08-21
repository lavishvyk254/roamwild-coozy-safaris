import ImageCarousel from '../components/ImageCarousel';

const experiences = [
  {
    id: 'kanunga-falls-exp',
    title: 'Kanunga Falls Hike & Teambuilding',
    description: 'A day of waterfall trekking, teambuilding games, great food, and new friendships made along the way.',
    images: [
      '/images/experience/kanunga-1.jpg',
      '/images/experience/kanunga-2.jpg',
      '/images/experience/kanunga-3.jpg',
      '/images/experience/kanunga-4.jpg',
      '/images/experience/kanunga-5.jpg',
      '/images/experience/kanunga-6.jpg',
      '/images/experience/kanunga-7.jpg',
    ],
  },
  {
    id: 'charity-exp',
    title: 'Adventure with Purpose — Morning Star Children\'s Home',
    description: 'Mornings spent donating and playing games with the children at Morning Star Children\'s Home, followed by an afternoon of sightseeing.',
    images: [
      '/images/experience/charity-1.jpg',
      '/images/experience/charity-2.jpg',
      '/images/experience/charity-3.jpg',
      '/images/experience/charity-4.jpg',
      '/images/experience/charity-5.jpg',
      '/images/experience/charity-6.jpg',
      '/images/experience/charity-7.jpg',
    ],
  },
  {
    id: 'anti-gravity-exp',
    title: 'Kyamwilu Anti-Gravity Spot',
    description: 'A fun road trip to Machakos to experience the famous anti-gravity spot with the crew.',
    images: [
      '/images/experience/gravity-1.jpg',
      '/images/experience/gravity-2.jpg',
      '/images/experience/gravity-3.jpg',
      '/images/experience/gravity-4.jpg',
      '/images/experience/gravity-5.jpg',
      '/images/experience/gravity-6.jpg',
      '/images/experience/gravity-7.jpg',
    ],
  },
  {
    id: 'wrc-rally-exp',
    title: 'WRC Safari Rally Weekend',
    description: 'A thrilling weekend getaway following the action-packed WRC Safari Rally — 14th–15th March 2026.',
    images: [
      '/images/experience/wrc-1.jpg',
      '/images/experience/wrc-2.jpg',
      '/images/experience/wrc-3.jpg',
      '/images/experience/wrc-4.jpg',
      '/images/experience/wrc-5.jpg',
      '/images/experience/wrc-6.jpg',
      '/images/experience/wrc-7.jpg',
    ],
  },
  {
    id: 'paintball-exp',
    title: 'Paintball Battle',
    description: 'An adrenaline-filled day of paintball action with the crew — 5th April 2026.',
    images: [
      '/images/experience/paintball-1.jpg',
      '/images/experience/paintball-2.jpg',
      '/images/experience/paintball-3.jpg',
      '/images/experience/paintball-4.jpg',
      '/images/experience/paintball-5.jpg',
      '/images/experience/paintball-6.jpg',
      '/images/experience/paintball-7.jpg',
    ],
  },
  {
    id: 'summertides-exp',
    title: 'Summertides Malindi',
    description: 'A multi-day beach getaway to Malindi — sun, sea, and unforgettable memories — 2nd–4th July 2026.',
    images: [
      '/images/experience/malindi-1.jpg',
      '/images/experience/malindi-2.jpg',
      '/images/experience/malindi-3.jpg',
      '/images/experience/malindi-4.jpg',
      '/images/experience/malindi-5.jpg',
      '/images/experience/malindi-6.jpg',
      '/images/experience/malindi-7.jpg',
    ],
  },
];

export default function Experience() {
  return (
    <div className="page">
      <h1>Our Experience</h1>
      <p>A look back at some of our past trips and the memories made along the way.</p>

      <div className="experience-grid">
        {experiences.map((exp) => (
          <div className="experience-card" key={exp.id}>
            <ImageCarousel images={exp.images} altBase={exp.title} />
            <h3>{exp.title}</h3>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}