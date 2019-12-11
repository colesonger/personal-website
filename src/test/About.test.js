import React from 'react';
import ReactDOM from 'react-dom';
import {About} from '../components/About';
import {configure, shallow} from 'enzyme';
import {expect} from 'chai';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});
describe('About Component', () => {
    it('Renders initial div', () => {
      const wrapper = shallow(<About/>);
      const welcome = <div className='about-me'></div>
      expect(wrapper.find(welcome)).to.have.length(1);
    })
  })