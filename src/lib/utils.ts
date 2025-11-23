import { type ClassValue, clsx } from 'clsx';

/**
 * クラス名を結合
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

/**
 * Spotify埋め込みURLを生成
 */
export function getSpotifyEmbedUrl(showUrl: string): string {
  const showId = showUrl.split('/show/')[1]?.split('?')[0];
  if (!showId) return '';
  return `https://open.spotify.com/embed/show/${showId}`;
}

/**
 * YouTube埋め込みURLを生成
 */
export function getYouTubeEmbedUrl(videoUrl: string): string {
  // チャンネルURLの場合はそのまま返す
  if (videoUrl.includes('/@')) {
    return videoUrl;
  }
  
  const videoId = videoUrl.split('v=')[1]?.split('&')[0];
  if (!videoId) return '';
  return `https://www.youtube.com/embed/${videoId}`;
}

/**
 * 環境変数の取得（クライアント側）
 */
export function getEnvVar(key: string, fallback: string = ''): string {
  return process.env[key] || fallback;
}

/**
 * URLが有効かチェック
 */
export function isValidUrl(url: string): boolean {
  if (!url) return false;
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

/**
 * 読了時間を計算（分）
 */
export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 400; // 日本語の場合は文字数
  const wordCount = content.length;
  return Math.ceil(wordCount / wordsPerMinute);
}

/**
 * 見出しを抽出してTable of Contentsを生成
 */
export interface TocItem {
  id: string;
  text: string;
  level: number;
}

export function extractHeadings(content: string): TocItem[] {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const headings: TocItem[] = [];
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const text = match[2].trim();
    const id = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-');

    headings.push({ id, text, level });
  }

  return headings;
}
