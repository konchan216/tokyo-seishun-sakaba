import { siteConfig, platformLinks } from './config';
import { Article } from './types';

/**
 * PodcastSeries用のJSON-LD
 */
export function getPodcastSeriesJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'PodcastSeries',
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    image: siteConfig.ogImage,
    sameAs: platformLinks.map((link) => link.url),
    author: {
      '@type': 'Person',
      name: '昆 寛隆',
      url: siteConfig.url + '/about',
    },
    genre: ['Society & Culture', 'Leisure'],
    inLanguage: 'ja',
  };
}

/**
 * Article用のJSON-LD
 */
export function getArticleJsonLd(article: Article) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    image: article.coverImage || siteConfig.ogImage,
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    author: {
      '@type': 'Person',
      name: article.author || '東京青春酒場',
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: siteConfig.url + '/images/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteConfig.url}/articles/${article.slug}`,
    },
  };
}

/**
 * Organization用のJSON-LD
 */
export function getOrganizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    logo: siteConfig.url + '/images/logo.png',
    sameAs: [
      siteConfig.links.x,
      siteConfig.links.instagram,
      ...platformLinks.map((link) => link.url),
    ].filter(Boolean),
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      availableLanguage: 'Japanese',
    },
  };
}

/**
 * WebSite用のJSON-LD
 */
export function getWebSiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteConfig.url}/articles?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}
