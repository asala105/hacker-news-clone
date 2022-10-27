import axios from 'axios';
const baseUrl = 'https://hacker-news.firebaseio.com/v0'

export const fetchArticles = async (articlesFilter = 'topstories') => {
    try {
        const articlesIds = await axios.get(`${baseUrl}/${articlesFilter}.json`);
        return articlesIds;
    } catch (error) {
        console.error(error);
    }
}

export const fetchArticleDetails = async (id) => {
    try {
        const article = await axios.get(`${baseUrl}/item/${id}.json`);
        return article
    } catch (error) {
        console.error(error);
    }
}