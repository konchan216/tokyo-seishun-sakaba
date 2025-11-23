import { Metadata } from 'next';
import { Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'プライバシーポリシー',
  description: '東京青春酒場のプライバシーポリシー。個人情報の取り扱いについて。',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-brand-ivory dark:bg-brand-charcoal">
      {/* ヒーロー */}
      <section className="bg-gradient-to-br from-brand-navy to-brand-navy-light text-white py-16 md:py-24">
        <div className="container-custom text-center">
          <div className="inline-block mb-6">
            <div className="w-20 h-20 bg-brand-vermilion rounded-2xl flex items-center justify-center shadow-2xl">
              <Shield size={40} />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            プライバシーポリシー
          </h1>
          <p className="text-xl text-brand-ivory/90 max-w-2xl mx-auto">
            個人情報の取り扱いについて
          </p>
        </div>
      </section>

      {/* コンテンツ */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <div className="bg-white dark:bg-brand-navy-light rounded-2xl shadow-xl p-8 md:p-12 prose prose-lg max-w-none">
            <div className="text-brand-navy dark:text-brand-ivory">
              <p className="text-sm text-brand-navy/60 dark:text-brand-ivory/60 mb-8">
                最終更新日: 2025年1月
              </p>

              <h2 className="text-2xl font-bold text-brand-navy dark:text-brand-ivory mb-4">
                1. 基本方針
              </h2>
              <p className="text-brand-navy/80 dark:text-brand-ivory/80 mb-6 leading-relaxed">
                東京青春酒場（以下「当番組」）は、リスナーの皆様の個人情報を適切に取り扱い、
                プライバシーを尊重することを重要な責務と考えています。
                本プライバシーポリシーは、当番組が提供するウェブサイト、ポッドキャスト、
                SNSアカウントにおける個人情報の取り扱いについて定めるものです。
              </p>

              <h2 className="text-2xl font-bold text-brand-navy dark:text-brand-ivory mb-4">
                2. 収集する情報
              </h2>
              <p className="text-brand-navy/80 dark:text-brand-ivory/80 mb-4 leading-relaxed">
                当番組では、以下の情報を収集する場合があります:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-brand-navy/80 dark:text-brand-ivory/80">
                <li>お便りフォームにご記入いただいた情報（氏名、ニックネーム、メールアドレス、メッセージ内容）</li>
                <li>ウェブサイトへのアクセス情報（IPアドレス、ブラウザ情報、閲覧ページなど）</li>
                <li>SNSでの公開情報（フォロー、いいね、リプライなど）</li>
                <li>アンケートやイベント参加時にご提供いただいた情報</li>
              </ul>

              <h2 className="text-2xl font-bold text-brand-navy dark:text-brand-ivory mb-4">
                3. 情報の利用目的
              </h2>
              <p className="text-brand-navy/80 dark:text-brand-ivory/80 mb-4 leading-relaxed">
                収集した情報は、以下の目的で利用します:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-brand-navy/80 dark:text-brand-ivory/80">
                <li>番組内でのお便り紹介や質問への回答</li>
                <li>リスナーとのコミュニケーション</li>
                <li>番組改善のための分析</li>
                <li>イベントやキャンペーンの運営</li>
                <li>重要なお知らせの配信</li>
                <li>ウェブサイトの利便性向上</li>
              </ul>

              <h2 className="text-2xl font-bold text-brand-navy dark:text-brand-ivory mb-4">
                4. 情報の管理
              </h2>
              <p className="text-brand-navy/80 dark:text-brand-ivory/80 mb-6 leading-relaxed">
                当番組は、収集した個人情報を適切に管理し、不正アクセス、紛失、破壊、
                改ざん、漏洩などのリスクに対して、合理的な安全対策を講じます。
                個人情報は、利用目的を達成するために必要な期間のみ保持します。
              </p>

              <h2 className="text-2xl font-bold text-brand-navy dark:text-brand-ivory mb-4">
                5. 第三者への提供
              </h2>
              <p className="text-brand-navy/80 dark:text-brand-ivory/80 mb-6 leading-relaxed">
                当番組は、以下の場合を除き、リスナーの同意なく個人情報を第三者に提供することはありません:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-brand-navy/80 dark:text-brand-ivory/80">
                <li>法令に基づく場合</li>
                <li>人の生命、身体または財産の保護のために必要な場合</li>
                <li>国の機関等への協力が必要な場合</li>
              </ul>

              <h2 className="text-2xl font-bold text-brand-navy dark:text-brand-ivory mb-4">
                6. Cookie（クッキー）について
              </h2>
              <p className="text-brand-navy/80 dark:text-brand-ivory/80 mb-6 leading-relaxed">
                当番組のウェブサイトでは、利便性向上やアクセス解析のためにCookieを使用する場合があります。
                Cookieの使用を希望されない場合は、ブラウザの設定で無効化することができますが、
                一部機能が制限される可能性があります。
              </p>

              <h2 className="text-2xl font-bold text-brand-navy dark:text-brand-ivory mb-4">
                7. アクセス解析ツール
              </h2>
              <p className="text-brand-navy/80 dark:text-brand-ivory/80 mb-6 leading-relaxed">
                当番組のウェブサイトでは、Google Analyticsなどのアクセス解析ツールを使用しています。
                これらのツールはCookieを使用して、個人を特定しない形でアクセス情報を収集・分析します。
                データは匿名で収集されており、個人を特定するものではありません。
              </p>

              <h2 className="text-2xl font-bold text-brand-navy dark:text-brand-ivory mb-4">
                8. 外部サービスの利用
              </h2>
              <p className="text-brand-navy/80 dark:text-brand-ivory/80 mb-4 leading-relaxed">
                当番組では、以下の外部サービスを利用しています:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-brand-navy/80 dark:text-brand-ivory/80">
                <li>Spotify、Apple Podcasts、YouTube、Amazon Music（ポッドキャスト配信）</li>
                <li>Google Forms（お便りフォーム）</li>
                <li>X (Twitter)、Instagram（SNS）</li>
              </ul>
              <p className="text-brand-navy/80 dark:text-brand-ivory/80 mb-6 leading-relaxed">
                これらのサービスにおける個人情報の取り扱いは、各サービスのプライバシーポリシーに準じます。
              </p>

              <h2 className="text-2xl font-bold text-brand-navy dark:text-brand-ivory mb-4">
                9. お便りの取り扱い
              </h2>
              <p className="text-brand-navy/80 dark:text-brand-ivory/80 mb-6 leading-relaxed">
                お便りフォームからいただいたメッセージは、番組内で紹介させていただく場合があります。
                紹介の際は、個人を特定できる情報を伏せるなど、プライバシーに配慮します。
                匿名希望の方は、その旨を明記してください。
              </p>

              <h2 className="text-2xl font-bold text-brand-navy dark:text-brand-ivory mb-4">
                10. 個人情報の開示・訂正・削除
              </h2>
              <p className="text-brand-navy/80 dark:text-brand-ivory/80 mb-6 leading-relaxed">
                リスナーの皆様は、当番組が保有するご自身の個人情報について、
                開示、訂正、削除を請求することができます。
                ご希望の場合は、SNSのDMまたはお便りフォームからご連絡ください。
              </p>

              <h2 className="text-2xl font-bold text-brand-navy dark:text-brand-ivory mb-4">
                11. プライバシーポリシーの変更
              </h2>
              <p className="text-brand-navy/80 dark:text-brand-ivory/80 mb-6 leading-relaxed">
                当番組は、必要に応じて本プライバシーポリシーを変更することがあります。
                変更後のプライバシーポリシーは、本ページに掲載した時点で効力を生じるものとします。
              </p>

              <h2 className="text-2xl font-bold text-brand-navy dark:text-brand-ivory mb-4">
                12. お問い合わせ
              </h2>
              <p className="text-brand-navy/80 dark:text-brand-ivory/80 mb-4 leading-relaxed">
                本プライバシーポリシーに関するご質問やご意見は、以下からお問い合わせください:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-brand-navy/80 dark:text-brand-ivory/80">
                <li>X (Twitter): @seishunsakaba</li>
                <li>Instagram: @seishunsakaba</li>
                <li>お便りフォーム</li>
              </ul>

              <div className="bg-brand-ivory dark:bg-brand-navy rounded-xl p-6 mt-12">
                <p className="text-sm text-brand-navy/70 dark:text-brand-ivory/70">
                  制定日: 2025年1月<br />
                  東京青春酒場
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
