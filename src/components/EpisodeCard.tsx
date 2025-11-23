import Link from 'next/link';
import { Calendar, Clock } from 'lucide-react';
import { PodcastEpisode } from '@/lib/types';
import { formatPodcastDate, truncateDescription } from '@/lib/rss';

interface EpisodeCardProps {
  episode: PodcastEpisode;
}

export default function EpisodeCard({ episode }: EpisodeCardProps) {
  return (
    <article className="card p-6 hover:scale-[1.02] transition-transform duration-300">
      <div className="flex flex-col h-full">
        <h3 className="text-xl font-bold text-brand-navy dark:text-brand-ivory mb-3 line-clamp-2">
          {episode.title}
        </h3>

        <div className="flex items-center gap-4 text-sm text-brand-navy/60 dark:text-brand-ivory/60 mb-4">
          <div className="flex items-center gap-1">
            <Calendar size={16} />
            <time dateTime={episode.pubDate}>
              {formatPodcastDate(episode.pubDate)}
            </time>
          </div>
          {episode.itunes?.duration && (
            <div className="flex items-center gap-1">
              <Clock size={16} />
              <span>{episode.itunes.duration}</span>
            </div>
          )}
        </div>

        <p className="text-brand-navy/80 dark:text-brand-ivory/80 mb-6 flex-grow line-clamp-3">
          {truncateDescription(episode.description, 120)}
        </p>

        <Link
          href={episode.link}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary text-center inline-block"
        >
          聴く
        </Link>
      </div>
    </article>
  );
}
