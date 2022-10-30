import React, { useState, useEffect } from 'react';
import { fetchArticleDetails } from '../API/API';
import { Link } from 'react-router-dom';
import { GetTimeDifference } from '../Utils';
import { useSearchParams } from 'react-router-dom';
import { Comment } from '../components/Comment';
import { Footer } from '../components/Footer';

export default function ArticleDetails(props) {
    const [articleDetails, setArticleDetails] = useState([]);
    const [comments, setComments] = useState([]);
    let [searchParams] = useSearchParams();

    useEffect(() => {
        const fetchData = async () => {
            const articleId = searchParams.get('id');
            const article = await fetchArticleDetails(articleId);

            setArticleDetails(article.data);
            const commentsIds = article.data.kids;
            const commentsData = [];
            for (const commentId of commentsIds) {
                const comment = await fetchArticleDetails(commentId);
                commentsData.push(comment.data);
            }
            setComments(commentsData)
        };
        fetchData();
    }, []);

    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <td className='article-number'>
                            <a href='#' className='link'>
                                &#9650;
                            </a>
                        </td>
                        <td>
                            <a href={articleDetails?.url} className='article-header'>
                                {articleDetails?.title}
                            </a>
                            {/* filtering */}
                            <a href='#' className='org-filter'>
                                ({'mused.org'})
                            </a>

                            <span className='article-brief-description'>
                                <a href='#' className='link'>{` ${articleDetails?.score ? articleDetails?.score : 0} `}</a> points by{' '}
                                <Link to={`/user?id=${articleDetails?.by}`} className='link'>
                                    {` ${articleDetails?.by} `}
                                </Link>{' '}
                                <Link to={`/item?id=${articleDetails?.id}`} className='link'>{` ${GetTimeDifference(articleDetails?.time)} `}</Link>
                                {/* only works if logged in */}|
                                <Link to='/login' className='link'>
                                    {' '}
                                    hide
                                </Link>
                                |{' '}
                                <a href='#' className='link'>
                                    {' '}
                                    past
                                </a>{' '}
                                |
                                <Link to={`/item?id=${articleDetails?.id}`} className='link'>{` ${articleDetails?.kids ? articleDetails?.kids.length : 0} `}</Link>comments
                            </span>
                        </td>
                    </tr>
                    {comments.map((comment, index) => (
                        < Comment comment={comment} key={index} />
                    ))}
                </tbody>
            </table>
            <hr />
            <Footer />
        </div>
    );
}
