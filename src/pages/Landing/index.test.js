import { shallow } from 'enzyme';
import Landing from './';

jest.mock('./hooks', () => ({
    __esModule: true,
    default: () => ({
        searchValue: 'Test value',
        searchResult: [], 
        handleInputChange: jest.fn(), 
        onHandleClick: jest.fn(), 
        handleKeywordClick: jest.fn()
    })
}));

describe('Snapshot for Landing component', () => {
    const wrapper = shallow(<Landing />);
    it('should render snapshot with default props', () => {
        expect(wrapper).toMatchSnapshot();    
    });
});
