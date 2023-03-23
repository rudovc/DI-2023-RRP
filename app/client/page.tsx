'use client';

import Grid from '@/shared/components/Grid';
import styles from './page.module.css';
import { useEffect, useState } from 'react';

// NOTE: Comment to stop using mocked data
// import data from '../../data/mock.json';
import Card from '@/shared/components/Card';
import { ArticleData } from '@/shared/config/types';
import Article from '@/shared/components/Article';
import { ArticleService } from '@/shared/services';

export default function Page() {
  const [articles, setArticles] = useState<ArticleData[]>([]);

  useEffect(() => {
    const getArticles = async () => {
      // NOTE: Uncomment to fetch up-to-date data
      const data = await ArticleService.getArticles();

      setArticles(data.results);
    };

    getArticles();
  }, []);

  return (
    <div className={styles.div}>
      <Grid columns={3} rows={6} gap={22} className={styles.grid}>
        {articles.map((article) => (
          <Card key={article.uri}>
            <Article article={article} />
          </Card>
        ))}
      </Grid>
    </div>
  );
}
