import React from 'react';
import Comment from './CommentContainer';


const CommentsList = ({comments, addComment}) => <ul>
      {comments.map(comment => <Comment key={comment.id} {...comment}/>)}
      <button className='Add' onClick={() => addComment(prompt('Add your comment'))}>Add</button>
    </ul>;

export default CommentsList;
