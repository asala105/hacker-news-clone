import axios from 'axios';
const baseUrl = 'https://hacker-news.firebaseio.com/v0'

const articlesFilter = {
    jobs: 'jobstories',
    newest: 'newstories',
    news: 'topstories',
    ask: 'askstories',
    show: 'showstories',
    front: 'topstories'
};

export const fetchArticlesIds = async (filter) => {
    const filtering = (filter && articlesFilter[filter]) ? articlesFilter[filter] : 'topstories';
    try {
        const articlesIds = await axios.get(`${baseUrl}/${filtering}.json`);
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

export const fetchUserDetails = async (id) => {
    try {
        return await axios.get(`${baseUrl}/user/${id}.json`);
    } catch (error) {
        console.error(error);
    }
}