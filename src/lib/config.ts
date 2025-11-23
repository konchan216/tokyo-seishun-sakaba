import { SiteConfig, NavItem, PlatformLink } from './types';

// サイト基本設定
export const siteConfig: SiteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME || '東京青春酒場',
  description: '20代後半〜30代に贈る、お酒と青春のポッドキャスト。毎週、居酒屋トークをお届けします。',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://tokyo-seishun-sakaba.vercel.app',
  ogImage: '/images/og-image.jpg',
  links: {
    spotify: process.env.NEXT_PUBLIC_SPOTIFY_SHOW_URL,
    apple: process.env.NEXT_PUBLIC_APPLE_PODCASTS_URL,
    youtube: process.env.NEXT_PUBLIC_YOUTUBE_URL,
    amazon: process.env.NEXT_PUBLIC_AMAZON_MUSIC_URL,
    x: process.env.NEXT_PUBLIC_X_URL,
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL,
    googleForm: process.env.NEXT_PUBLIC_GOOGLE_FORM_URL,
    goods: process.env.NEXT_PUBLIC_GOODS_URL,
  },
};

// ナビゲーション
export const navItems: NavItem[] = [
  { label: '聴く', href: '/listen' },
  { label: '記事', href: '/articles' },
  { label: 'グッズ', href: '/goods' },
  { label: 'お便り', href: '/letter' },
  { label: 'について', href: '/about' },
];

// プラットフォームリンク
export const platformLinks: PlatformLink[] = [
  {
    name: 'Spotify',
    url: siteConfig.links.spotify || '',
    icon: 'spotify',
    color: '#1DB954',
  },
  {
    name: 'Apple Podcasts',
    url: siteConfig.links.apple || '',
    icon: 'apple',
    color: '#A259FF',
  },
  {
    name: 'YouTube',
    url: siteConfig.links.youtube || '',
    icon: 'youtube',
    color: '#FF0000',
  },
  {
    name: 'Amazon Music',
    url: siteConfig.links.amazon || '',
    icon: 'amazon',
    color: '#00A8E1',
  },
].filter((link) => link.url);

// SNSリンク
export const socialLinks = [
  {
    name: 'X (Twitter)',
    url: siteConfig.links.x || '',
    icon: 'twitter',
  },
  {
    name: 'Instagram',
    url: siteConfig.links.instagram || '',
    icon: 'instagram',
  },
].filter((link) => link.url);

// RSS URL
export const PODCAST_RSS_URL = process.env.PODCAST_RSS_URL || '';
