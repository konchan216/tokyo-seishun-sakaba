'use client';

import { getSpotifyEmbedUrl } from '@/lib/utils';

interface PodcastPlayerProps {
  spotifyUrl: string;
}

export default function PodcastPlayer({ spotifyUrl }: PodcastPlayerProps) {
  if (!spotifyUrl) {
    return (
      <div className="bg-brand-navy/10 dark:bg-brand-ivory/10 rounded-xl p-8 text-center">
        <p className="text-brand-navy/60 dark:text-brand-ivory/60">
          Spotifyプレイヤーを表示するにはSpotify番組URLを設定してください
        </p>
      </div>
    );
  }

  const embedUrl = getSpotifyEmbedUrl(spotifyUrl);

  return (
    <div className="w-full rounded-xl overflow-hidden shadow-lg">
      <iframe
        src={embedUrl}
        width="100%"
        height="352"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        className="w-full"
      />
    </div>
  );
}
