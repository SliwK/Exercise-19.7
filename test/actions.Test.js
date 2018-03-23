const assert = require("chai").assert;
const expect = require("chai").expect;
import uuid from "uuid";


import {ADD_COMMENT, addComment, EDIT_COMMENT, editComment, REMOVE_COMMENT, removeComment, THUMB_UP_COMMENT, THUMB_DOWN_COMMENT, thumbUpComment, thumbDownComment} from '../src/actions.js';






describe('actions', () => {
  xit('should create an action to add comment', () => {
    const text = 'TEST COMMENT';
    const id = uuid();

    const expectedAction = {
      type: ADD_COMMENT,
      id,
      text,
      votes: 0
    };
    expect(addComment(text)).to.be.equal(expectedAction);

  });
});
