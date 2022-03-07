import { shallow } from 'enzyme';
import App from './App';

describe('SearchKeyword component', () => {
    it('should render snapshots properly', () =>{
        const wrapper =  shallow(<App />);
        expect(wrapper).toMatchSnapshot();
    });
})
