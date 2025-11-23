import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock } from 'lucide-react';
import { Article } from '@/lib/types';
import { formatArticleDate } from '@/lib/mdx';
import { calculateReadingTime } from '@/lib/utils';

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  const readingTime = calculateReadingTime(article.content);

  return (
    <Link href={`/articles/${article.slug}`} className="block group">
      <article className="card hover:scale-[1.02] transition-all duration-300">
        {article.coverImage && (
          <div className="relative w-full h-48 overflow-hidden">
            <Image
              src={article.coverImage}
              alt={article.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
            />
          </div>
        )}

        <div className="p-6">
          <div className="flex flex-wrap gap-2 mb-3">
            {article.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>

          <h3 className="text-xl font-bold text-brand-navy dark:text-brand-ivory mb-3 line-clamp-2 group-hover:text-brand-vermilion transition-colors">
            {article.title}
          </h3>

          <p className="text-brand-navy/80 dark:text-brand-ivory/80 mb-4 line-clamp-3">
            {article.excerpt}
          </p>

          <div className="flex items-center gap-4 text-sm text-brand-navy/60 dark:text-brand-ivory/60">
            <div className="flex items-center gap-1">
              <Calendar size={16} />
              <time dateTime={article.publishedAt}>
                {formatArticleDate(article.publishedAt)}
              </time>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={16} />
              <span>{readingTime}分</span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
