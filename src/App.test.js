import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow, mount, render} from 'enzyme'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


it('renders without crashing', () => {
  shallow(<App />);
});


describe('app', () => {
  const wrapper = mount(<App />);
  it('has no home button on home', () => {
    
    const foundLinks = wrapper.find(".home").length
    const foundLinksTwo = wrapper.find("Link.recepten")

    // .recepten werkt niet (dan zijn er twee..) maar a.recepten wel gewoon een.. ra ra ra?
    // hij kijkt ook naar react nodes!
    
    expect(foundLinks).toBe(0)
    expect(foundLinksTwo.length).toBe(1)

  })

  it('has home button on other page', () => {
    wrapper.find('a.recepten').simulate('click', {button: 0})
    const foundLinks = wrapper.find("Link.home").length
    expect(foundLinks).toBe(1)
  })
})
