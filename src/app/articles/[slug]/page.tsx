import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getAllArticleSlugs, getArticleBySlug, formatArticleDate } from '@/lib/mdx';
import { calculateReadingTime } from '@/lib/utils';
import { siteConfig } from '@/lib/config';

export async function generateStaticParams() {
  const slugs = getAllArticleSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    return {
      title: '記事が見つかりません',
    };
  }

  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      publishedTime: article.publishedAt,
      authors: article.author ? [article.author] : undefined,
      images: article.coverImage ? [article.coverImage] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
      images: article.coverImage ? [article.coverImage] : undefined,
    },
  };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  const readingTime = calculateReadingTime(article.content);

  return (
    <div className="min-h-screen bg-brand-ivory dark:bg-brand-charcoal">
      <article>
        {/* カバー画像 */}
        {article.coverImage && (
          <div className="relative w-full h-[400px] md:h-[500px]">
            <Image
              src={article.coverImage}
              alt={article.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 to-transparent" />
          </div>
        )}

        {/* 記事ヘッダー */}
        <header className={`${article.coverImage ? '-mt-32 relative z-10' : 'py-16'}`}>
          <div className="container-custom max-w-4xl">
            <Link
              href="/articles"
              className="inline-flex items-center gap-2 text-white hover:text-brand-vermilion transition-colors mb-6"
            >
              <ArrowLeft size={20} />
              記事一覧に戻る
            </Link>

            <div className="bg-white dark:bg-brand-navy-light rounded-2xl shadow-xl p-8 md:p-12">
              {/* タグ */}
              <div className="flex flex-wrap gap-2 mb-6">
                {article.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>

              {/* タイトル */}
              <h1 className="text-3xl md:text-5xl font-bold text-brand-navy dark:text-brand-ivory mb-6">
                {article.title}
              </h1>

              {/* メタ情報 */}
              <div className="flex flex-wrap items-center gap-6 text-brand-navy/60 dark:text-brand-ivory/60 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar size={18} />
                  <time dateTime={article.publishedAt}>
                    {formatArticleDate(article.publishedAt)}
                  </time>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={18} />
                  <span>{readingTime}分で読めます</span>
                </div>
                {article.author && (
                  <div className="text-brand-navy dark:text-brand-ivory">
                    著者: {article.author}
                  </div>
                )}
              </div>

              {/* 抜粋 */}
              <p className="text-lg text-brand-navy/80 dark:text-brand-ivory/80 leading-relaxed border-l-4 border-brand-vermilion pl-6 mb-8">
                {article.excerpt}
              </p>

              {/* シェアボタン */}
              <div className="flex gap-4 pt-6 border-t border-brand-navy/10 dark:border-brand-ivory/10">
                <span className="text-sm text-brand-navy/60 dark:text-brand-ivory/60 flex items-center gap-2">
                  <Share2 size={18} />
                  シェア:
                </span>
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(siteConfig.url + '/articles/' + article.slug)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-brand-vermilion hover:text-brand-vermilion/80 transition-colors"
                >
                  X (Twitter)
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(siteConfig.url + '/articles/' + article.slug)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-brand-vermilion hover:text-brand-vermilion/80 transition-colors"
                >
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* 記事本文 */}
        <div className="container-custom max-w-4xl py-16">
          <div className="prose prose-lg max-w-none bg-white dark:bg-brand-navy-light rounded-2xl shadow-lg p-8 md:p-12">
            <MDXRemote source={article.content} />
          </div>
        </div>

        {/* フッターCTA */}
        <div className="container-custom max-w-4xl pb-16">
          <div className="bg-gradient-to-br from-brand-vermilion to-brand-vermilion-light text-white rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              番組を聴いてみませんか？
            </h2>
            <p className="text-white/90 mb-6">
              東京青春酒場は各種プラットフォームで配信中
            </p>
            <Link href="/listen" className="btn-secondary">
              番組を聴く
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
