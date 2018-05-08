import React from 'react'
import jest from 'jest';
import { shallow } from 'enzyme';
import App from './App';

test('should render without crashing', () => {
    shallow(<App />);
});

test('should render two ProductLines', () => {
    const mainComponent = shallow(<App/>);
   expect(mainComponent.find('div.container').children()).toHaveLength(2);
   expect(mainComponent.find('div.container').children().reduce((value, node) => value && node.name() === 'ProductLine', true)).toBeTruthy();
})
