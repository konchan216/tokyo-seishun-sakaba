import { Metadata } from 'next';
import { ExternalLink } from 'lucide-react';
import { getPodcastEpisodes } from '@/lib/rss';
import { siteConfig, platformLinks } from '@/lib/config';
import EpisodeCard from '@/components/EpisodeCard';
import PodcastPlayer from '@/components/PodcastPlayer';

export const metadata: Metadata = {
  title: '聴く',
  description: '東京青春酒場のポッドキャストエピソードを聴く。Spotify、Apple Podcasts、YouTube、Amazon Musicで配信中。',
};

export const revalidate = 3600;

export default async function ListenPage() {
  const episodes = await getPodcastEpisodes(6);

  return (
    <div className="min-h-screen bg-brand-ivory dark:bg-brand-charcoal">
      {/* ヒーロー */}
      <section className="bg-gradient-to-br from-brand-navy to-brand-navy-light text-white py-16 md:py-24">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            番組を聴く
          </h1>
          <p className="text-xl text-brand-ivory/90 max-w-2xl mx-auto mb-12">
            お好きなプラットフォームでお楽しみください
          </p>

          {/* プラットフォームリンク */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {platformLinks.map((platform) => (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg font-medium transition-all flex items-center gap-2 group"
              >
                {platform.name}
                <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            ))}
          </div>

          {/* Spotifyプレイヤー */}
          {siteConfig.links.spotify && (
            <div className="max-w-2xl mx-auto">
              <PodcastPlayer spotifyUrl={siteConfig.links.spotify} />
            </div>
          )}
        </div>
      </section>

      {/* エピソード一覧 */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy dark:text-brand-ivory mb-12 text-center">
            エピソード一覧
          </h2>

          {episodes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {episodes.map((episode, index) => (
                <EpisodeCard key={index} episode={episode} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-brand-navy/60 dark:text-brand-ivory/60 mb-6">
                エピソードを取得できませんでした。
                <br />
                各プラットフォームから直接お聴きください。
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {platformLinks.map((platform) => (
                  <a
                    key={platform.name}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    {platform.name}で聴く
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* RSS購読 */}
      <section className="section-padding bg-brand-mustard/10 dark:bg-brand-mustard/5">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-navy dark:text-brand-ivory mb-4">
              RSSで購読
            </h2>
            <p className="text-brand-navy/80 dark:text-brand-ivory/80 mb-6">
              お好きなポッドキャストアプリでRSSフィードを登録できます
            </p>
            {process.env.PODCAST_RSS_URL && (
              <div className="bg-white dark:bg-brand-navy rounded-lg p-4 break-all text-sm text-brand-navy dark:text-brand-ivory font-mono">
                {process.env.PODCAST_RSS_URL}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
