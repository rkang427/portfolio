import dotenv from 'dotenv';
import { MeiliSearch } from 'meilisearch';

dotenv.config({ path: '.env.local' });

const client = new MeiliSearch({
    host: 'https://meilisearch-xrp8.onrender.com',
    apiKey: process.env.MEILI_MASTER_KEY,
});

const index = client.index('blog-posts');
async function fetchBlogPosts() {
    const res = await fetch('https://portfolio-blog-g9ak.onrender.com/api/blog-posts');
    const posts = await res.json();
    return posts.data;
}

async function indexBlogPosts() {
    type BlogPost = {
        id: number;
        documentId: string;
        title: string;
        content: string;
        postedAt: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
    };
    const r: BlogPost[] = await fetchBlogPosts();

    console.log('Response:', r);

    const documents = r.map(post => ({
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

indexBlogPosts().catch(console.error);