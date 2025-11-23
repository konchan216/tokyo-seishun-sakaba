import { Metadata } from 'next';
import { Mail, ExternalLink } from 'lucide-react';
import { siteConfig } from '@/lib/config';

export const metadata: Metadata = {
  title: 'お便り',
  description: '東京青春酒場へのお便り募集。あなたの青春エピソードや質問を送ってください。',
};

export default function LetterPage() {
  const googleFormUrl = siteConfig.links.googleForm;

  return (
    <div className="min-h-screen bg-brand-ivory dark:bg-brand-charcoal">
      {/* ヒーロー */}
      <section className="bg-gradient-to-br from-brand-navy to-brand-navy-light text-white py-16 md:py-24">
        <div className="container-custom text-center">
          <div className="inline-block mb-6">
            <div className="w-20 h-20 bg-brand-vermilion rounded-2xl flex items-center justify-center shadow-2xl">
              <Mail size={40} />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            お便り募集中
          </h1>
          <p className="text-xl text-brand-ivory/90 max-w-2xl mx-auto">
            あなたの青春エピソードや質問をお待ちしています
          </p>
        </div>
      </section>

      {/* コンテンツ */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          {/* 募集内容 */}
          <div className="bg-white dark:bg-brand-navy-light rounded-2xl shadow-xl p-8 md:p-12 mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-navy dark:text-brand-ivory mb-6 text-center">
              こんなお便りを募集しています
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-brand-ivory dark:bg-brand-navy rounded-xl p-6">
                <h3 className="text-lg font-bold text-brand-navy dark:text-brand-ivory mb-3 flex items-center gap-2">
                  🍺 お酒のエピソード
                </h3>
                <p className="text-sm text-brand-navy/80 dark:text-brand-ivory/80">
                  思い出深いお酒の話、失敗談、面白かった飲み会の思い出など
                </p>
              </div>

              <div className="bg-brand-ivory dark:bg-brand-navy rounded-xl p-6">
                <h3 className="text-lg font-bold text-brand-navy dark:text-brand-ivory mb-3 flex items-center gap-2">
                  🌸 青春の思い出
                </h3>
                <p className="text-sm text-brand-navy/80 dark:text-brand-ivory/80">
                  学生時代、社会人になってからの青春エピソード
                </p>
              </div>

              <div className="bg-brand-ivory dark:bg-brand-navy rounded-xl p-6">
                <h3 className="text-lg font-bold text-brand-navy dark:text-brand-ivory mb-3 flex items-center gap-2">
                  💼 仕事の悩み
                </h3>
                <p className="text-sm text-brand-navy/80 dark:text-brand-ivory/80">
                  キャリア、職場の人間関係、働き方についての相談
                </p>
              </div>

              <div className="bg-brand-ivory dark:bg-brand-navy rounded-xl p-6">
                <h3 className="text-lg font-bold text-brand-navy dark:text-brand-ivory mb-3 flex items-center gap-2">
                  💕 恋愛・人間関係
                </h3>
                <p className="text-sm text-brand-navy/80 dark:text-brand-ivory/80">
                  恋愛の悩み、友人関係、パートナーとの話など
                </p>
              </div>
            </div>

            <div className="bg-brand-vermilion/10 dark:bg-brand-vermilion/20 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-bold text-brand-navy dark:text-brand-ivory mb-3">
                📢 番組で読まれるかも！
              </h3>
              <p className="text-sm text-brand-navy/80 dark:text-brand-ivory/80">
                いただいたお便りは番組内で紹介させていただく場合があります。
                匿名希望の方はその旨をお書きください。
              </p>
            </div>
          </div>

          {/* フォーム */}
          {googleFormUrl ? (
            <div className="bg-white dark:bg-brand-navy-light rounded-2xl shadow-xl overflow-hidden">
              <div className="p-6 bg-brand-mustard/20 dark:bg-brand-mustard/10 text-center">
                <h2 className="text-xl font-bold text-brand-navy dark:text-brand-ivory mb-2">
                  お便りフォーム
                </h2>
                <p className="text-sm text-brand-navy/70 dark:text-brand-ivory/70">
                  下記フォームからお気軽にお送りください
                </p>
              </div>

              {/* Googleフォーム埋め込み */}
              <div className="relative w-full" style={{ height: '800px' }}>
                <iframe
                  src={googleFormUrl}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  className="w-full h-full"
                >
                  読み込んでいます…
                </iframe>
              </div>

              {/* 別ウィンドウで開くリンク */}
              <div className="p-6 bg-brand-navy/5 dark:bg-brand-ivory/5 text-center">
                <a
                  href={googleFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-brand-vermilion hover:text-brand-vermilion/80 transition-colors"
                >
                  別ウィンドウで開く
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ) : (
            <div className="bg-white dark:bg-brand-navy-light rounded-2xl shadow-xl p-12 text-center">
              <p className="text-brand-navy/60 dark:text-brand-ivory/60 mb-4">
                お便りフォームを準備中です
              </p>
              <p className="text-sm text-brand-navy/50 dark:text-brand-ivory/50">
                しばらくお待ちください
              </p>
            </div>
          )}

          {/* 注意事項 */}
          <div className="mt-8 bg-brand-ivory/50 dark:bg-brand-navy/50 rounded-xl p-6">
            <h3 className="text-sm font-bold text-brand-navy dark:text-brand-ivory mb-3">
              ⚠️ 注意事項
            </h3>
            <ul className="text-xs text-brand-navy/70 dark:text-brand-ivory/70 space-y-2">
              <li>• すべてのお便りにお返事できない場合があります</li>
              <li>• 番組で紹介する際、内容を一部編集させていただく場合があります</li>
              <li>• 誹謗中傷、公序良俗に反する内容は掲載いたしません</li>
              <li>• 個人情報の取り扱いについては<a href="/privacy" className="link-underline">プライバシーポリシー</a>をご確認ください</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
