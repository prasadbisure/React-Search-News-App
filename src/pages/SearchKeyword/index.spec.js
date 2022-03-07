import { shallow } from 'enzyme';
import SearchKeyword from './';

const props = {
    data: [ {id: 0, webTitle: 'Test'},
            {id: 1, webTitle: 'Test2'}
        ],
    handleKeywordClick: jest.fn()
}

describe('SearchKeyword component', () => {
    const wrapper =  shallow(<SearchKeyword data={props.data} handleKeywordClick={props.handleKeywordClick} />);
    
    it('should render snapshots properly', () => {
        expect(wrapper).toMatchSnapshot();
    });
})

