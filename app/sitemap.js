import { getJobs } from '@/lib/db';
import { BLOG_POSTS } from '@/data/blogPosts';
import { PROJECTS } from '@/data/projects';

export const dynamic = 'force-dynamic';

export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://csatechnologiesco.com';
  const now = new Date();

  // Core static pages
  const staticPages = [
    { url: baseUrl, lastModified: now, changeFrequency: 'daily', priority: 1.0 },
    { url: `${baseUrl}/services`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/careers`, lastModified: now, changeFrequency: 'daily', priority: 0.9 },
    { url: `${baseUrl}/portfolio`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/process`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${baseUrl}/courses`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/privacy-policy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/terms-and-conditions`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ];

  // Dynamic active job pages
  let jobPages = [];
  try {
    const activeJobs = await getJobs({ status: 'active' });
    jobPages = activeJobs.map((job) => ({
      url: `${baseUrl}/careers/${job.id}`,
      lastModified: new Date(job.updatedAt || job.createdAt || now),
      changeFrequency: 'daily',
      priority: 0.85,
    }));
  } catch (err) {
    console.error('Error generating job sitemap URLs:', err);
  }

  // Dynamic blog post pages
  const blogPages = (BLOG_POSTS || []).map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date || now),
    changeFrequency: 'monthly',
    priority: 0.75,
  }));

  // Dynamic portfolio case study pages
  const portfolioPages = (PROJECTS || []).map((project) => ({
    url: `${baseUrl}/portfolio/${project.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.75,
  }));

  return [...staticPages, ...jobPages, ...blogPages, ...portfolioPages];
}
