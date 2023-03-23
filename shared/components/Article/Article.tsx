import { ArticleData } from '@/shared/config/types';

import styles from './article.module.css';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

interface ArticleProps {
  article: ArticleData;
  children?: React.ReactNode;
  className?: string;
}

const Article: React.FC<ArticleProps> = ({
  article: { section, title, byline, abstract, published_date, url },
  children,
  className = '',
}) => {
  return (
    <article className={`${styles.article} ${className}`}>
      <div className={inter.className}>{section}</div>
      <h1 className={`${inter.className} ${styles.title}`}>{title}</h1>
      <div className={`${inter.className} ${styles.byline}`}>{byline}</div>
      <p className={inter.className}>{abstract}</p>
      <div className={`${inter.className} ${styles.date}`}>
        {published_date}
      </div>
      <Link
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`${inter.className} ${styles.url}`}
      >
        {url}
      </Link>
      <div>{children}</div>
    </article>
  );
};

export default Article;
