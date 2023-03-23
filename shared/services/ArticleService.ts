import data from '../../data/mock.json';

class ArticleService {
  public static getArticles = async ({ cache = false } = {}): Promise<
    typeof data
  > => {
    // NOTE: Uncomment to fetch up-to-date data
    const response = await fetch(
      `https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=${process.env.NEXT_PUBLIC_API_KEY}`,
      { cache: !cache ? 'no-cache' : undefined }
    );
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    return await response.json();
  };
}

export default ArticleService;
