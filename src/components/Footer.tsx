import Link from 'next/link';
import { Twitter, Instagram, Music } from 'lucide-react';
import { siteConfig, platformLinks, socialLinks } from '@/lib/config';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy dark:bg-brand-charcoal text-brand-ivory border-t border-brand-ivory/10">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* ブランド情報 */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-brand-vermilion rounded-lg flex items-center justify-center">
                <span className="text-xl">🏮</span>
              </div>
              <h3 className="text-xl font-bold">{siteConfig.name}</h3>
            </div>
            <p className="text-sm text-brand-ivory/70 leading-relaxed">
              {siteConfig.description}
            </p>
          </div>

          {/* リンク */}
          <div>
            <h4 className="font-bold mb-4 text-brand-mustard">リンク</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/listen"
                  className="text-sm text-brand-ivory/70 hover:text-brand-vermilion transition-colors"
                >
                  聴く
                </Link>
              </li>
              <li>
                <Link
                  href="/articles"
                  className="text-sm text-brand-ivory/70 hover:text-brand-vermilion transition-colors"
                >
                  記事
                </Link>
              </li>
              <li>
                <Link
                  href="/goods"
                  className="text-sm text-brand-ivory/70 hover:text-brand-vermilion transition-colors"
                >
                  グッズ
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-brand-ivory/70 hover:text-brand-vermilion transition-colors"
                >
                  番組について
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-brand-ivory/70 hover:text-brand-vermilion transition-colors"
                >
                  プライバシーポリシー
                </Link>
              </li>
            </ul>
          </div>

          {/* SNS・プラットフォーム */}
          <div>
            <h4 className="font-bold mb-4 text-brand-mustard">フォロー</h4>
            <div className="flex flex-wrap gap-3 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-brand-ivory/10 hover:bg-brand-vermilion rounded-lg flex items-center justify-center transition-colors"
                  aria-label={social.name}
                >
                  {social.icon === 'twitter' && <Twitter size={20} />}
                  {social.icon === 'instagram' && <Instagram size={20} />}
                </a>
              ))}
            </div>
            
            <h4 className="font-bold mb-4 text-brand-mustard">聴けるところ</h4>
            <div className="flex flex-wrap gap-2">
              {platformLinks.map((platform) => (
                <a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs bg-brand-ivory/10 hover:bg-brand-vermilion px-3 py-2 rounded-full transition-colors"
                >
                  {platform.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* コピーライト */}
        <div className="pt-8 border-t border-brand-ivory/10 text-center">
          <p className="text-sm text-brand-ivory/50">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
