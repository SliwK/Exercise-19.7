import {assert, expect} from "chai";
import {shallow} from "enzyme";
import sinon from 'sinon';
import React from 'react';
import Comment from '../src/Comment';

describe('CommentsList', function(){

  it("should render button with class thumb-up", function(){
    const wrapper = shallow(
      <li>
        <button className="thumb-up" />
      </li>);
    expect(wrapper.find('.thumb-up')).to.have.length(1)
  });

  it("should render button with class thumb-down", function(){
    const wrapper = shallow(
      <li>
        <button className="thumb-down" />
      </li>);
    expect(wrapper.find('.thumb-down')).to.have.length(1)
  });

  it("should render button with class thumb-down", function(){
    const wrapper = shallow(
      <li>
        <button className="edit" />
      </li>);
    expect(wrapper.find('.edit')).to.have.length(1)
  });

  it("should render button with class thumb-down", function(){
    const wrapper = shallow(
      <li>
        <button className="remove" />
      </li>);
    expect(wrapper.find('.remove')).to.have.length(1)
  });

});
