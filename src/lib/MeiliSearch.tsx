//import dotenv from 'dotenv';
import { MeiliSearch } from 'meilisearch';
export const client = new MeiliSearch({
    host: 'https://meilisearch-xrp8.onrender.com',
    apiKey: process.env.MEILI_MASTER_KEY,
});

export const index = client.index('blog-posts');
