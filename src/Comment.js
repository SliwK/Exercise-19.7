import React from 'react';
import './Comment.css';

const Comment = ({text, votes, id, thumbUpComment, thumbDownComment, editComment, removeComment}) =>
  <li>
    <p>{text}</p>
    <span>votes: {votes}</span>
    <button className="thumb-up" onClick={() => thumbUpComment(id)}>Thumb up</button>
    <button className="thumb-down" onClick={() => thumbDownComment(id)}>Thumb down</button>
    <button className="edit" onClick={() => editComment(id)}>Edit</button>
    <button className="remove" onClick={() => removeComment(id)}>Remove</button>
  </li>;

export default Comment;
