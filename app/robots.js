export default function robots() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://csatechnologiesco.com';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/admin/*', '/api/admin', '/api/admin/*'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
