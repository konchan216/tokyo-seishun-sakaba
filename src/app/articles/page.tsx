import { Metadata } from 'next';
import { getAllArticles, getAllTags } from '@/lib/mdx';
import ArticleCard from '@/components/ArticleCard';

export const metadata: Metadata = {
  title: '記事',
  description: '東京青春酒場の記事一覧。番組の裏話、お酒のコラム、イベント情報など。',
};

export default function ArticlesPage() {
  const articles = getAllArticles();
  const tags = getAllTags();

  return (
    <div className="min-h-screen bg-brand-ivory dark:bg-brand-charcoal">
      {/* ヒーロー */}
      <section className="bg-gradient-to-br from-brand-navy to-brand-navy-light text-white py-16 md:py-24">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            記事
          </h1>
          <p className="text-xl text-brand-ivory/90 max-w-2xl mx-auto">
            番組の裏話、お酒のコラム、イベント情報など
          </p>
        </div>
      </section>

      {/* タグフィルター */}
      {tags.length > 0 && (
        <section className="py-8 bg-white dark:bg-brand-navy-light border-b border-brand-navy/10 dark:border-brand-ivory/10">
          <div className="container-custom">
            <div className="flex flex-wrap gap-3 justify-center">
              {tags.map((tag) => (
                <button
                  key={tag}
                  className="tag hover:bg-brand-mustard/40 transition-colors cursor-pointer"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 記事一覧 */}
      <section className="section-padding">
        <div className="container-custom">
          {articles.length > 0 ? (
            <>
              <div className="text-center mb-12">
                <p className="text-brand-navy/60 dark:text-brand-ivory/60">
                  全 {articles.length} 件の記事
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map((article) => (
                  <ArticleCard key={article.slug} article={article} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-brand-navy/60 dark:text-brand-ivory/60 mb-4">
                まだ記事がありません
              </p>
              <p className="text-brand-navy/50 dark:text-brand-ivory/50">
                記事を追加するには、<code className="bg-brand-navy/10 dark:bg-brand-ivory/10 px-2 py-1 rounded">content/articles/</code> フォルダにMDXファイルを作成してください。
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
