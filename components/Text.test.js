import 'jsdom-global/register'
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Text from '../components/Text';

Enzyme.configure({ adapter: new Adapter() });

describe('Timeline', () => {
    let wrapper;

    it('renders correctly', () => {
        const tree = renderer
            .create(<Text text="Hola Mundo" />)
            .toJSON();
    
        expect(tree).toMatchSnapshot();
    });

    it('has a title of Text', () => {
        wrapper = mount(<Text text="hola" textId="holamorro" />)
        expect(wrapper.find('#holamorro').text()).toBe("hola")
    });

    it('wraps content in a div with #holamorro id', () => {
        wrapper = shallow(<Text text="hola" textId="holamorro" />);
        expect(wrapper.find('#holamorro').length).toEqual(1);
    });
});
