import Grid from '@/shared/components/Grid';
import styles from './page.module.css';

import data from '../../data/mock.json';
import Card from '@/shared/components/Card';
import { ArticleData } from '@/shared/config/types';
import Article from '@/shared/components/Article';
import { ArticleService } from '@/shared/services';

const getArticles = async (): Promise<ArticleData[]> => {
  // NOTE: Uncomment to fetch up-to-date data
  const data = await ArticleService.getArticles({ cache: true });

  return data.results;
};

export default async function Page() {
  const articles: ArticleData[] = await getArticles();

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
