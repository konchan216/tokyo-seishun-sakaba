import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Mic, Users, Heart, Target } from 'lucide-react';
import { siteConfig } from '@/lib/config';

export const metadata: Metadata = {
  title: '番組について',
  description: '東京青春酒場について。番組のコンセプト、MC紹介、配信情報など。',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-brand-ivory dark:bg-brand-charcoal">
      {/* ヒーロー */}
      <section className="bg-gradient-to-br from-brand-navy to-brand-navy-light text-white py-16 md:py-24">
        <div className="container-custom text-center">
          <div className="inline-block mb-6">
            <div className="w-20 h-20 bg-brand-vermilion rounded-2xl flex items-center justify-center shadow-2xl">
              <span className="text-4xl">🏮</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            番組について
          </h1>
          <p className="text-xl text-brand-ivory/90 max-w-2xl mx-auto">
            東京青春酒場のコンセプトとMC紹介
          </p>
        </div>
      </section>

      {/* コンセプト */}
      <section className="section-padding bg-white dark:bg-brand-charcoal">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy dark:text-brand-ivory mb-6">
              番組コンセプト
            </h2>
            <p className="text-lg text-brand-navy/80 dark:text-brand-ivory/80 leading-relaxed max-w-3xl mx-auto">
              「東京青春酒場」は、20代後半〜30代のリスナーに向けて、
              <br className="hidden md:block" />
              お酒をテーマにした大人のトーク番組です。
              <br />
              青春の思い出、仕事の悩み、恋愛話まで、
              <br className="hidden md:block" />
              お酒を片手にゆるく語り合う時間をお届けします。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-brand-ivory dark:bg-brand-navy-light rounded-2xl p-8 text-center">
              <Mic size={48} className="mx-auto mb-4 text-brand-vermilion" />
              <h3 className="text-xl font-bold text-brand-navy dark:text-brand-ivory mb-3">
                居酒屋トーク
              </h3>
              <p className="text-brand-navy/80 dark:text-brand-ivory/80">
                まるで居酒屋で友達と話しているような、リラックスしたトークをお届け
              </p>
            </div>

            <div className="bg-brand-ivory dark:bg-brand-navy-light rounded-2xl p-8 text-center">
              <Users size={48} className="mx-auto mb-4 text-brand-vermilion" />
              <h3 className="text-xl font-bold text-brand-navy dark:text-brand-ivory mb-3">
                リスナー参加型
              </h3>
              <p className="text-brand-navy/80 dark:text-brand-ivory/80">
                お便りコーナーやゲスト回など、リスナーと一緒に作る番組
              </p>
            </div>

            <div className="bg-brand-ivory dark:bg-brand-navy-light rounded-2xl p-8 text-center">
              <Heart size={48} className="mx-auto mb-4 text-brand-vermilion" />
              <h3 className="text-xl font-bold text-brand-navy dark:text-brand-ivory mb-3">
                共感と笑い
              </h3>
              <p className="text-brand-navy/80 dark:text-brand-ivory/80">
                「わかる！」と思わず共感してしまう話や、思わず笑ってしまうエピソード
              </p>
            </div>

            <div className="bg-brand-ivory dark:bg-brand-navy-light rounded-2xl p-8 text-center">
              <Target size={48} className="mx-auto mb-4 text-brand-vermilion" />
              <h3 className="text-xl font-bold text-brand-navy dark:text-brand-ivory mb-3">
                等身大の視点
              </h3>
              <p className="text-brand-navy/80 dark:text-brand-ivory/80">
                20〜30代の等身大の悩みや喜びを、飾らずに語り合います
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MC紹介 */}
      <section className="section-padding bg-brand-ivory dark:bg-brand-navy">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy dark:text-brand-ivory mb-4">
              MC紹介
            </h2>
          </div>

          <div className="bg-white dark:bg-brand-navy-light rounded-2xl shadow-xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
              <div className="w-32 h-32 bg-brand-mustard/20 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-5xl">🎙️</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-brand-navy dark:text-brand-ivory mb-2">
                  昆 寛隆（コン ヒロタカ）
                </h3>
                <p className="text-brand-navy/70 dark:text-brand-ivory/70 mb-4">
                  メインMC / プロデューサー
                </p>
                <p className="text-brand-navy/80 dark:text-brand-ivory/80 leading-relaxed">
                  29歳。デジタルマーケター兼ボイストレーナー。
                  株式会社Vookでマーケティングを担当しながら、
                  フリーランスで声優やアイドルへのボイストレーニング指導を行う。
                  お酒と音楽、そして人との語らいを愛する二刀流クリエイター。
                </p>
              </div>
            </div>

            <div className="bg-brand-ivory dark:bg-brand-navy rounded-xl p-6">
              <h4 className="font-bold text-brand-navy dark:text-brand-ivory mb-3">
                💭 MCからのメッセージ
              </h4>
              <p className="text-sm text-brand-navy/80 dark:text-brand-ivory/80 leading-relaxed">
                「東京青春酒場」は、仕事や人間関係に悩む20〜30代の皆さんと一緒に、
                お酒を飲みながらゆるく語り合える場所でありたいと思っています。
                完璧じゃなくていい。等身大の自分で、一緒に笑って、泣いて、共感しましょう。
                毎週お会いできるのを楽しみにしています！
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 配信情報 */}
      <section className="section-padding bg-white dark:bg-brand-charcoal">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy dark:text-brand-ivory mb-4">
              配信情報
            </h2>
          </div>

          <div className="bg-brand-ivory dark:bg-brand-navy-light rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-bold text-brand-navy dark:text-brand-ivory mb-3">
                  📅 配信頻度
                </h3>
                <p className="text-brand-navy/80 dark:text-brand-ivory/80">
                  毎週更新（不定期）
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-brand-navy dark:text-brand-ivory mb-3">
                  ⏱️ 配信時間
                </h3>
                <p className="text-brand-navy/80 dark:text-brand-ivory/80">
                  30〜60分程度
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-brand-navy dark:text-brand-ivory mb-3">
                  🎧 配信開始
                </h3>
                <p className="text-brand-navy/80 dark:text-brand-ivory/80">
                  2023年〜
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-brand-navy dark:text-brand-ivory mb-3">
                  📱 配信プラットフォーム
                </h3>
                <p className="text-brand-navy/80 dark:text-brand-ivory/80">
                  Spotify / Apple Podcasts / YouTube / Amazon Music
                </p>
              </div>
            </div>

            <div className="text-center pt-8 border-t border-brand-navy/10 dark:border-brand-ivory/10">
              <Link href="/listen" className="btn-primary">
                番組を聴く
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* お問い合わせ */}
      <section className="section-padding bg-brand-vermilion text-white">
        <div className="container-custom max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            お問い合わせ
          </h2>
          <p className="text-white/90 mb-8 leading-relaxed">
            番組へのご質問、コラボレーションのご依頼、
            <br className="hidden md:block" />
            スポンサー・広告掲載のお問い合わせは、
            <br />
            SNSのDMまたはお便りフォームからお願いします。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/letter" className="btn-secondary">
              お便りフォーム
            </Link>
            {siteConfig.links.x && (
              <a
                href={siteConfig.links.x}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg font-medium transition-colors"
              >
                X (Twitter)
              </a>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
