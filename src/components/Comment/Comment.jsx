import React from 'react'
import { Link } from 'react-router-dom';
import { GetTimeDifference } from '../../Utils';
import parse from 'html-react-parser';

export default function Comment(props) {
    const { comment } = props
//get Children Comments here 
    return (
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
    )
}
