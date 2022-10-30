import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { GetTimeDifference } from '../../Utils';
import parse from 'html-react-parser';
import { fetchArticleDetails } from '../../API/API';

export default function Comment(props) {
    const { comment } = props
    const [childrenComments, setChildrenComments] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const children = comment.kids;
            const childrenData = []
            for (const commentId of children) {
                const comment = await fetchArticleDetails(commentId);
                childrenData.push(comment.data);
            }
            setChildrenComments(childrenData)
        }
        fetchData();
    }, [comment])
    return (
        <>
        <tr>
            <th className='article-number vote-icon'>
                <a href='#' className='link'>
                    &#9650;
                </a>
            </th>
            <td>
                <span className='jobs-top-note'>
                    <Link to={`/user?id=${comment.by}`} className='link'>
                        {` ${comment.by} `}
                    </Link>{' '}
                    <Link to={`/item?id=${comment.id}`} className='link'>{` ${GetTimeDifference(comment.time)} `}</Link>
                </span>
                <p className='comment-text'>{parse(comment?.text ? comment.text : '')}</p>
            </td>
        </tr>
            <tr><th className='article-number vote-icon'>

            </th>
                <td>
                    {childrenComments?.map((child, index) => (
                        <Comment comment={child} key={index} />
                    ))}
                </td>
            </tr>
        </>
    )
}
