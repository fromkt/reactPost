import React from 'react';
import './CommentList.css';
import {Comment} from '../';


const CommentList = ({comments}) => {
  const commentList = comments.map( (comment, index) => {
    const name = comment.email.split('@')[0];
    return <Comment name={name} body={comment.body} key={index} />
  });
  
  return (
    <ul className='CommentList'>
      {commentList}
    </ul>
  );
};

export default CommentList;