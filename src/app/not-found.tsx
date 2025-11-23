'use client';

import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-brand-ivory dark:bg-brand-charcoal flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        <div className="mb-8">
          <div className="w-32 h-32 bg-brand-vermilion/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-7xl">🏮</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-brand-navy dark:text-brand-ivory mb-4">
            404
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy dark:text-brand-ivory mb-4">
            ページが見つかりません
          </h2>
          <p className="text-brand-navy/70 dark:text-brand-ivory/70 mb-8">
            お探しのページは存在しないか、移動した可能性があります。
            <br />
            URLをご確認いただくか、トップページからお探しください。
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="btn-primary inline-flex items-center justify-center gap-2"
          >
            <Home size={20} />
            トップページへ
          </Link>
          <Link
            href="/articles"
            className="btn-outline inline-flex items-center justify-center gap-2"
          >
            <ArrowLeft size={20} />
            記事一覧へ
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t border-brand-navy/10 dark:border-brand-ivory/10">
          <p className="text-sm text-brand-navy/60 dark:text-brand-ivory/60 mb-4">
            お探しのコンテンツが見つからない場合
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link
              href="/listen"
              className="text-brand-vermilion hover:text-brand-vermilion/80 transition-colors"
            >
              番組を聴く
            </Link>
            <Link
              href="/articles"
              className="text-brand-vermilion hover:text-brand-vermilion/80 transition-colors"
            >
              記事一覧
            </Link>
            <Link
              href="/about"
              className="text-brand-vermilion hover:text-brand-vermilion/80 transition-colors"
            >
              番組について
            </Link>
            <Link
              href="/letter"
              className="text-brand-vermilion hover:text-brand-vermilion/80 transition-colors"
            >
              お便り
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
