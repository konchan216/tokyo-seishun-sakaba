import { MetadataRoute } from 'next';
import { getAllArticleSlugs } from '@/lib/mdx';
import { siteConfig } from '@/lib/config';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  // 静的ページ
  const routes = [
    '',
    '/listen',
    '/articles',
    '/goods',
    '/letter',
    '/about',
    '/privacy',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // 記事ページ
  const articleSlugs = getAllArticleSlugs();
  const articles = articleSlugs.map((slug) => ({
    url: `${baseUrl}/articles/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...routes, ...articles];
}
