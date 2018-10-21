import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow} from 'enzyme'

it('renders without crashing', () => {
  shallow(<App />);
});

it('has no home button on home', () => {

})
