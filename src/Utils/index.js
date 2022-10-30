import moment from "moment";
export const GetTimeDifference = (unixTimestamp) => {
    return moment.unix(unixTimestamp).fromNow()
}

export const UnixTimeToDate = (unixTimestamp) => {
    return moment.unix(unixTimestamp).format('MMMM DD, YYYY')
}

export const groupArticlesByDate = (articles) => {
    const ArticlesMap = new Map();
    articles.map((article) => {
        article.createdAt = moment.unix(article.time).format('MMMM DD, YYYY');
        let existRecord = ArticlesMap.get(article.createdAt);
        if (existRecord) {
            ArticlesMap.set(article.createdAt, [article].concat(existRecord));
        } else ArticlesMap.set(article.createdAt, article);
    })
    return ArticlesMap;
}