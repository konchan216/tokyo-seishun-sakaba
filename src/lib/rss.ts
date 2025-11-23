import Parser from 'rss-parser';
import { PodcastEpisode } from './types';
import { PODCAST_RSS_URL } from './config';

const parser = new Parser({
  customFields: {
    item: [
      ['itunes:duration', 'duration'],
      ['itunes:image', 'image'],
    ],
  },
});

/**
 * RSSフィードからポッドキャストエピソードを取得
 * @param limit 取得件数（デフォルト: 6）
 * @returns エピソード配列
 */
export async function getPodcastEpisodes(limit: number = 6): Promise<PodcastEpisode[]> {
  if (!PODCAST_RSS_URL) {
    console.warn('PODCAST_RSS_URL is not set. Returning empty episodes.');
    return [];
  }

  try {
    const feed = await parser.parseURL(PODCAST_RSS_URL);
    
    const episodes: PodcastEpisode[] = feed.items.slice(0, limit).map((item: any) => ({
      title: item.title || '',
      link: item.link || '',
      pubDate: item.pubDate || '',
      description: item.contentSnippet || item.description || '',
      enclosure: item.enclosure,
      itunes: {
        duration: item.duration,
        image: item.image,
      },
    }));

    return episodes;
  } catch (error) {
    console.error('Failed to fetch podcast RSS feed:', error);
    return [];
  }
}

/**
 * 日付をフォーマット
 * @param dateString 日付文字列
 * @returns フォーマット済み日付
 */
export function formatPodcastDate(dateString: string): string {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

/**
 * 説明文を短縮
 * @param description 説明文
 * @param maxLength 最大文字数
 * @returns 短縮された説明文
 */
export function truncateDescription(description: string, maxLength: number = 150): string {
  if (description.length <= maxLength) return description;
  return description.slice(0, maxLength) + '...';
}
