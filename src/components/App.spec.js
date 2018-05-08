import React from 'react'
import jest from 'jest';
import {Provider} from 'react-redux';
import { shallow } from 'enzyme';
import App from './App';
// import configureMockStore from 'redux-mock-store'

test('should render without crashing', () => {
    const App = shallow(<Provider><App/></Provider>);

});

test('should render two ProductLines', () => {
    const mainComponent = shallow(<Provider><App/></Provider>);
   expect(mainComponent.find('div.container').children()).toHaveLength(2);
   //expect(mainComponent.find('div.container').children().reduce((value, node) => value && node.name() === 'ProductLine', true)).toBeTruthy();
})
