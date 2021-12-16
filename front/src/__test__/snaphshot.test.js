// ./**tests**/todo_component_test.js
import React from 'react';
import { shallow } from 'enzyme';
import {Home} from '../components/home.component'
import About from '../components/about.component'
import renderer from 'react-test-renderer';

//Use array destructurig to create mock functions.
let [getVideos, addToCart] = new Array(2).fill(jest.fn());

const props = {
  getVideos: getVideos,
      item: {id:1, title:"Test", price:12.12, category:"sport", description:"wfwfwfwfw"},
      isAuthenticated: true,
      addToCart: addToCart,
      user: {id:1, username:"mfkfw",password:"dadwad", email:"fefefef@mail.con"}
  
}

function shallowSetup() {
  // Sample props to pass to our shallow render
  const props = {
    getVideos: getVideos,
        item: {id:1, title:"Test", price:12.12, category:"sport", description:"wfwfwfwfw"},
        isAuthenticated: true,
        addToCart: addToCart,
        user: {id:1, username:"mfkfw",password:"dadwad", email:"fefefef@mail.con"}
    
  }
  // wrapper instance around rendered output
  const enzymeWrapper = shallow(<Home {...props} />);

  return {
    props,
    enzymeWrapper
  };
}

// ./**tests**/todo_component_test.js
describe('Shallow rendered Todo Card', () => {
    it('should render a card with the details of the Todo', () => {
      // Setup wrapper and assign props.
      // const { enzymeWrapper, props } = shallowSetup();
      // expect(toJson(<Home {...props}/>)).toMatchSnapshot();
      const tree = renderer.create(
        <About />
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });