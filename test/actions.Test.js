const assert = require("chai").assert;
const expect = require("chai").expect;
import uuid from "uuid";


import {ADD_COMMENT, addComment, EDIT_COMMENT, editComment, THUMB_UP_COMMENT, THUMB_DOWN_COMMENT, thumbUpComment, thumbDownComment} from '../src/actions.js';

describe('actions', () => {
  it('should create an action to add comment with valid uuid id', () => {
    const text = 'TEST COMMENT';

    expect(addComment(text)).to.have.property('id').with.lengthOf(36);
  });

  it('should create an action edit', () => {
    var text = 'TEST COMMENT';

    expect(editComment(text)).to.have.property('text');
  });

  it('shoud create action thumb up', () => {
    var id = uuid();

    expect(thumbUpComment(id)).to.have.property('type').to.be.equal('THUMB_UP_COMMENT');
  });

  it('shoud create action thumb down', () => {
    var id = uuid();

    expect(thumbDownComment(id)).to.have.property('type').to.be.equal('THUMB_DOWN_COMMENT');
  });
});
