import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Article, ArticleFrontmatter } from './types';

const articlesDirectory = path.join(process.cwd(), 'content/articles');

/**
 * 全記事のスラッグを取得
 */
export function getAllArticleSlugs(): string[] {
  if (!fs.existsSync(articlesDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(articlesDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => fileName.replace(/\.mdx$/, ''));
}

/**
 * スラッグから記事を取得
 */
export function getArticleBySlug(slug: string): Article | null {
  try {
    const fullPath = path.join(articlesDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    const frontmatter = data as ArticleFrontmatter;

    return {
      slug,
      title: frontmatter.title,
      excerpt: frontmatter.excerpt,
      coverImage: frontmatter.coverImage,
      publishedAt: frontmatter.publishedAt,
      tags: frontmatter.tags || [],
      author: frontmatter.author,
      content,
    };
  } catch (error) {
    console.error(`Failed to get article: ${slug}`, error);
    return null;
  }
}

/**
 * 全記事を取得（新しい順）
 */
export function getAllArticles(): Article[] {
  const slugs = getAllArticleSlugs();
  const articles = slugs
    .map((slug) => getArticleBySlug(slug))
    .filter((article): article is Article => article !== null)
    .sort((a, b) => {
      return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
    });

  return articles;
}

/**
 * 最新記事を取得
 */
export function getRecentArticles(limit: number = 3): Article[] {
  const allArticles = getAllArticles();
  return allArticles.slice(0, limit);
}

/**
 * タグで記事を絞り込み
 */
export function getArticlesByTag(tag: string): Article[] {
  const allArticles = getAllArticles();
  return allArticles.filter((article) => article.tags.includes(tag));
}

/**
 * 全タグを取得
 */
export function getAllTags(): string[] {
  const allArticles = getAllArticles();
  const tagsSet = new Set<string>();

  allArticles.forEach((article) => {
    article.tags.forEach((tag) => tagsSet.add(tag));
  });

  return Array.from(tagsSet).sort();
}

/**
 * 日付をフォーマット
 */
export function formatArticleDate(dateString: string): string {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}
