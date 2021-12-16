import React from 'react';
import * as redux from 'react-redux'
import {Home} from '../components/home.component'
import renderer from 'react-test-renderer';
import "core-js/stable";
import "regenerator-runtime/runtime";

const spy = jest.spyOn(redux, 'useSelector')
spy.mockReturnValue({ username:'test' })

//Use array destructurig to create mock functions.
let [getVideos, addToCart] = new Array(2).fill(jest.fn());

const props = {
  getVideos: getVideos,
  isAuthenticated: true,
  addToCart: addToCart,
  item: {
    items: new Array(1).fill({id:1, title:"Test", price:12.12, category:"sport", description:"wfwfwfwfw"}), 
    loading: false},
  user:   {
    accessToken: "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VybmFtZSIsImlhdCI6MTYzOTQ3NzQ5NiwiZXhwIjoxNjM5NTYzODk2fQ.52Aky798yCUOTNBvKzsXybLjdOdSgk9qbtoT3ABBVpUaTSlM7LPvsEjCprU7UICGjIjOBwsGOJm55Clmsowr7w",
    email: "hotl@mial.ru",
    id: 7,
    roles: [],
    tokenType: "Bearer",
    username: "username"
  }
  
}

describe('Shallow rendered Todo Card', () =>{
    it('Testst', () => {
    const tree = renderer.create(
        <Home {...props} />).toJSON();

    expect(tree).toMatchSnapshot();
    })
})