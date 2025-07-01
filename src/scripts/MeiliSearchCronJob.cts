// MeiliSearchCronJob.ts
import { MeiliSearch } from 'meilisearch';
import 'dotenv/config';

async function main() {
  const client = new MeiliSearch({
    host: 'https://meilisearch-xrp8.onrender.com',
    apiKey: process.env.MEILI_MASTER_KEY,
  });

  const indexUid = 'blog-posts';

  try {
    await client.getIndex(indexUid);
    console.log('Index exists');
  } catch {
    await client.createIndex(indexUid);
    console.log('Index created');
  }

  const index = client.index(indexUid);
  await index.updateSettings({
    searchableAttributes: ['title', 'content'],
  });

  const res = await fetch(
    'https://portfolio-blog-g9ak.onrender.com/api/blog-posts',
  );
  const { data: posts } = await res.json();
    interface Post {
        id: string;
        documentId: string;
        title: string;
        content: string;
        postedAt: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
    }
  const documents = posts.map((post: Post) => ({
    id: post.id,
    documentId: post.documentId,
    title: post.title,
    content: post.content,
    postedAt: post.postedAt,
    createdAt: post.createdAt,
    updatedAt: post.updatedAt,
    publishedAt: post.publishedAt,
  }));

  const result = await index.addDocuments(documents);
  console.log('Indexed:', result);
}

main().catch(console.error);
