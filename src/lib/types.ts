// ポッドキャストエピソード型
export interface PodcastEpisode {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  enclosure?: {
    url: string;
    type: string;
  };
  itunes?: {
    duration?: string;
    image?: string;
  };
}

// 記事型（MDX）
export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  coverImage?: string;
  publishedAt: string;
  tags: string[];
  author?: string;
  content: string;
}

// 記事フロントマター型
export interface ArticleFrontmatter {
  title: string;
  excerpt: string;
  coverImage?: string;
  publishedAt: string;
  tags: string[];
  author?: string;
}

// サイト設定型
export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    spotify?: string;
    apple?: string;
    youtube?: string;
    amazon?: string;
    x?: string;
    instagram?: string;
    googleForm?: string;
    goods?: string;
  };
}

// ナビゲーションアイテム型
export interface NavItem {
  label: string;
  href: string;
  icon?: string;
}

// プラットフォームリンク型
export interface PlatformLink {
  name: string;
  url: string;
  icon: string;
  color: string;
}
