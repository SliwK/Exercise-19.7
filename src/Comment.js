import React from 'react';
import './Comment.css';

const Comment = ({text, votes, id, thumbUpComment, thumbDownComment, editComment, removeComment}) =>
  <li>
    <p>{text}</p>
    <span>votes: {votes}</span>
    <button onClick={() => thumbUpComment(id)}>Thumb up</button>
    <button onClick={() => thumbDownComment(id)}>Thumb down</button>
    <button onClick={() => editComment(id)}>Edit</button>
    <button onClick={() => removeComment(id)}>Remove</button>
  </li>;

export default Comment;
