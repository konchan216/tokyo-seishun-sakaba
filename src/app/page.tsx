import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink, Mail, ShoppingBag, Headphones } from 'lucide-react';
import { getPodcastEpisodes } from '@/lib/rss';
import { getRecentArticles } from '@/lib/mdx';
import { siteConfig, platformLinks } from '@/lib/config';
import EpisodeCard from '@/components/EpisodeCard';
import ArticleCard from '@/components/ArticleCard';
import PodcastPlayer from '@/components/PodcastPlayer';

export const revalidate = 3600;

export default async function Home() {
  const episodes = await getPodcastEpisodes(3);
  const articles = getRecentArticles(3);

  return (
    <div>
      {/* ヒーローセクション */}
      <section className="bg-gradient-to-br from-brand-navy via-brand-navy-light to-brand-navy py-20 md:py-32 text-white">
        <div className="container-custom text-center">
          <div className="animate-fadeIn">
            <div className="inline-block mb-6">
              <div className="w-32 h-32 md:w-40 md:h-40 relative mx-auto">
                <Image
                  src="/images/logo.png"
                  alt="東京青春酒場"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              東京青春酒場
            </h1>
            
            <p className="text-xl md:text-2xl text-brand-ivory/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              20代後半〜30代に贈る、お酒と青春のポッドキャスト
            </p>

            {/* プラットフォームボタン */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {platformLinks.map((platform) => (
                <a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center gap-2 group"
                >
                  <Headphones size={20} />
                  {platform.name}で聴く
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
        </div>
      </section>

      {/* 最新エピソード */}
      {episodes.length > 0 && (
        <section className="section-padding bg-white dark:bg-brand-charcoal">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy dark:text-brand-ivory mb-4">
                最新エピソード
              </h2>
              <p className="text-brand-navy/70 dark:text-brand-ivory/70">
                新しいエピソードをチェック
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {episodes.map((episode, index) => (
                <EpisodeCard key={index} episode={episode} />
              ))}
            </div>

            <div className="text-center">
              <Link href="/listen" className="btn-outline">
                すべてのエピソードを見る
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* 最新記事 */}
      {articles.length > 0 && (
        <section className="section-padding bg-brand-ivory dark:bg-brand-navy">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy dark:text-brand-ivory mb-4">
                最新記事
              </h2>
              <p className="text-brand-navy/70 dark:text-brand-ivory/70">
                番組の裏話やお酒のコラムなど
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {articles.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>

            <div className="text-center">
              <Link href="/articles" className="btn-outline">
                記事一覧を見る
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CTAセクション */}
      <section className="section-padding bg-gradient-to-br from-brand-vermilion to-brand-vermilion-light text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* お便り */}
              {siteConfig.links.googleForm && (
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-colors">
                  <Mail size={48} className="mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-4">お便り募集中</h3>
                  <p className="mb-6 text-white/90">
                    あなたの青春エピソードや質問を送ってください
                  </p>
                  <Link
                    href="/letter"
                    className="inline-block bg-white text-brand-vermilion hover:bg-white/90 font-medium px-6 py-3 rounded-lg transition-colors"
                  >
                    お便りを送る
                  </Link>
                </div>
              )}

              {/* グッズ */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-colors">
                <ShoppingBag size={48} className="mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">グッズ</h3>
                <p className="mb-6 text-white/90">
                  番組オリジナルグッズ販売予定
                </p>
                <Link
                  href="/goods"
                  className="inline-block bg-white text-brand-vermilion hover:bg-white/90 font-medium px-6 py-3 rounded-lg transition-colors"
                >
                  詳細を見る
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 番組紹介 */}
      <section className="section-padding bg-white dark:bg-brand-charcoal">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy dark:text-brand-ivory mb-6">
              東京青春酒場とは
            </h2>
            <p className="text-lg text-brand-navy/80 dark:text-brand-ivory/80 leading-relaxed mb-8">
              20代後半〜30代のリスナーに向けて、お酒をテーマにした大人のトーク番組。
              毎週、居酒屋トークをお届けします。青春の思い出、仕事の悩み、恋愛話まで、
              お酒を片手にゆるく語り合う時間をお楽しみください。
            </p>
            <Link href="/about" className="btn-secondary">
              番組について詳しく
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
