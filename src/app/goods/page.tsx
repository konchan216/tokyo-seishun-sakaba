import { Metadata } from 'next';
import { ShoppingBag, ExternalLink } from 'lucide-react';
import { siteConfig } from '@/lib/config';

export const metadata: Metadata = {
  title: 'グッズ',
  description: '東京青春酒場のオリジナルグッズ。Tシャツ、ステッカー、タンブラーなど販売予定。',
};

export default function GoodsPage() {
  const hasGoodsUrl = siteConfig.links.goods;

  return (
    <div className="min-h-screen bg-brand-ivory dark:bg-brand-charcoal">
      {/* ヒーロー */}
      <section className="bg-gradient-to-br from-brand-navy to-brand-navy-light text-white py-16 md:py-24">
        <div className="container-custom text-center">
          <div className="inline-block mb-6">
            <div className="w-20 h-20 bg-brand-vermilion rounded-2xl flex items-center justify-center shadow-2xl">
              <ShoppingBag size={40} />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            グッズ
          </h1>
          <p className="text-xl text-brand-ivory/90 max-w-2xl mx-auto">
            東京青春酒場オリジナルグッズ
          </p>
        </div>
      </section>

      {/* コンテンツ */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          {hasGoodsUrl ? (
            // グッズショップがある場合
            <div className="text-center">
              <div className="bg-white dark:bg-brand-navy-light rounded-2xl shadow-xl p-12 mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-brand-navy dark:text-brand-ivory mb-6">
                  オンラインショップ
                </h2>
                <p className="text-brand-navy/80 dark:text-brand-ivory/80 mb-8 leading-relaxed">
                  番組オリジナルグッズを販売中！
                  <br />
                  Tシャツ、ステッカー、タンブラーなど、
                  <br />
                  東京青春酒場のロゴ入りアイテムをお楽しみください。
                </p>
                <a
                  href={hasGoodsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  <ShoppingBag size={20} />
                  ショップを見る
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ) : (
            // グッズショップがない場合（準備中）
            <div className="text-center">
              <div className="bg-white dark:bg-brand-navy-light rounded-2xl shadow-xl p-12 mb-8">
                <div className="w-24 h-24 bg-brand-mustard/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ShoppingBag size={48} className="text-brand-mustard" />
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold text-brand-navy dark:text-brand-ivory mb-6">
                  グッズ販売 準備中
                </h2>
                
                <p className="text-brand-navy/80 dark:text-brand-ivory/80 mb-8 leading-relaxed">
                  現在、東京青春酒場オリジナルグッズの販売準備を進めています。
                  <br />
                  Tシャツ、ステッカー、タンブラーなど、
                  <br />
                  番組ロゴ入りのアイテムを予定しています。
                </p>

                <div className="bg-brand-ivory dark:bg-brand-navy rounded-xl p-6 mb-8">
                  <h3 className="text-lg font-bold text-brand-navy dark:text-brand-ivory mb-4">
                    販売予定アイテム
                  </h3>
                  <ul className="text-left max-w-md mx-auto space-y-2 text-brand-navy/80 dark:text-brand-ivory/80">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-brand-vermilion rounded-full"></span>
                      オリジナルTシャツ
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-brand-vermilion rounded-full"></span>
                      ロゴステッカー
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-brand-vermilion rounded-full"></span>
                      タンブラー
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-brand-vermilion rounded-full"></span>
                      トートバッグ
                    </li>
                  </ul>
                </div>

                <p className="text-sm text-brand-navy/60 dark:text-brand-ivory/60 mb-6">
                  販売開始はSNSでお知らせします。お楽しみに！
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                  {siteConfig.links.x && (
                    <a
                      href={siteConfig.links.x}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline"
                    >
                      X をフォロー
                    </a>
                  )}
                  {siteConfig.links.instagram && (
                    <a
                      href={siteConfig.links.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline"
                    >
                      Instagram をフォロー
                    </a>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* その他の情報 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-brand-navy-light rounded-xl p-6">
              <h3 className="text-lg font-bold text-brand-navy dark:text-brand-ivory mb-3">
                📦 配送について
              </h3>
              <p className="text-sm text-brand-navy/80 dark:text-brand-ivory/80">
                全国送料無料（一部地域を除く）。ご注文から3〜7営業日でお届けします。
              </p>
            </div>
            <div className="bg-white dark:bg-brand-navy-light rounded-xl p-6">
              <h3 className="text-lg font-bold text-brand-navy dark:text-brand-ivory mb-3">
                💳 お支払い方法
              </h3>
              <p className="text-sm text-brand-navy/80 dark:text-brand-ivory/80">
                クレジットカード、コンビニ決済、銀行振込に対応予定です。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
