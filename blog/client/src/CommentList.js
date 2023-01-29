import React from 'react'

const CommentList = ({ comments }) => {

    const renderedComments = comments.map(comment => {

        let content;
        if (comment.status === 'pending') {
            content = 'pending'
        }
        if (comment.status === 'rejected') {
            content = 'REJECTED'
        }
        if (comment.status === 'approved') {
            content = comment.content;
        }

        return <li key={comment.id}>{content}</li>
    });

    return <ul>{renderedComments}</ul>
};

export default CommentList;