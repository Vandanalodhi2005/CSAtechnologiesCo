export default function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function OrganizationSchema() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'CSA Technologies CO',
    url: 'https://csatechnologies.co',
    logo: 'https://csatechnologies.co/logo/csa-logo.svg',
    description:
      'CSA Technologies CO builds modern business websites, e-commerce platforms and custom web applications for growing businesses.',
    email: 'info@csatechnologiesco.com',
    telephone: '+91-92112-93383',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Noida',
      addressRegion: 'Uttar Pradesh',
      streetAddress: 'E-22B, 4th Floor, Sector 8',
      addressCountry: 'IN',
    },
    sameAs: [
      'https://linkedin.com/company/csatechnologiesco',
      'https://github.com/csatechnologiesco',
      'https://instagram.com/csatechnologiesco',
      'https://facebook.com/csatechnologiesco',
    ],
    foundingDate: '2021',
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      minValue: 5,
      maxValue: 20,
    },
    knowsAbout: [
      'Web Development',
      'E-Commerce Development',
      'Custom Web Applications',
      'Mobile App Development',
      'Next.js',
      'React',
      'Node.js',
      'MongoDB',
    ],
  };
  return <JsonLd data={data} />;
}

export function WebSiteSchema() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'CSA Technologies CO',
    url: 'https://csatechnologies.co',
    description:
      'Professional IT company website for CSA Technologies CO — web development, e-commerce, and custom software solutions.',
    publisher: {
      '@type': 'Organization',
      name: 'CSA Technologies CO',
    },
  };
  return <JsonLd data={data} />;
}

export function LocalBusinessSchema() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'CSA Technologies CO',
    url: 'https://csatechnologies.co',
    telephone: '+91-92112-93383',
    email: 'info@csatechnologiesco.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Noida',
      addressRegion: 'Uttar Pradesh',
      streetAddress: 'E-22B, 4th Floor, Sector 8',
      addressCountry: 'IN',
    },
    priceRange: '₹₹',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '19:00',
    },
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: { '@type': 'GeoCoordinates', latitude: 28.5355, longitude: 77.391 },
      geoRadius: '50000',
    },
  };
  return <JsonLd data={data} />;
}
