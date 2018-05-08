import React from 'react'
// import jest from 'jest';
import {Provider} from 'react-redux';
import { shallow } from 'enzyme';
import App from './App';

test('should render without crashing', () => {
    const App = shallow(<Provider><App/></Provider>);

});
