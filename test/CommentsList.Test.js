import {assert, expect} from "chai";
import {shallow} from "enzyme";
import sinon from 'sinon';
import React from 'react';
import CommentsList from "../src/CommentsList.js";
import Comment from '../src/CommentContainer';


describe('CommentsList', function(){
  it("should render", function(){
     const wrapper = shallow(<CommentsList comments={[]} addComment={() => null}/>);
     expect(wrapper.exists()).to.equal(true);
  });

  it("should render list of elements", function(){
    const commentsListMock = [{
      id: 1,
      comment: "test"
    },
    {
      id: 2,
      comment: "test 1"
    }]
    const wrapper = shallow(<CommentsList comments={commentsListMock} addComment={() => null}/>);
//    console.log("console:" , wrapper.debug());

    expect(wrapper.find(Comment)).to.have.length(2);
  });


  it("should render button with class Add", function(){
    const wrapper = shallow(
      <ul>
        <button className="Add" />
      </ul>);
    expect(wrapper.find('.Add')).to.have.length(1)
  });


//symulacja kliknięcia w button
  it("simulates click events", () => {
      const onButtonClickMock = sinon.spy();
      const wrapper = shallow(<button onClick={onButtonClickMock} />);
      wrapper.find('button').simulate('click');
      expect(onButtonClickMock).to.have.property('callCount', 1);
    });

});
