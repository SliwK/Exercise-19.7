import {assert, expect} from "chai";
import {shallow} from "enzyme";
import sinon from 'sinon';
import React from 'react';
import Comment from '../src/Comment';

describe('Comment', function(){

  it('it should render without crushing', function() {
    shallow(<Comment />);
  });

  it("should render button with class thumb-up!", function(){
    const wrapper = shallow(<Comment />);
    expect(wrapper.find('.thumb-up')).to.have.length(1);
  });

  it("should render button with class thumb-down!", function(){
    const wrapper = shallow(<Comment />);
    expect(wrapper.find('.thumb-down')).to.have.length(1);
  });

  it("should render button with class edit!", function(){
    const wrapper = shallow(<Comment />);
    expect(wrapper.find('.edit')).to.have.length(1);
  });

  it("should render button with class remove!", function(){
    const wrapper = shallow(<Comment />);
    expect(wrapper.find('.remove')).to.have.length(1);
  });

});
