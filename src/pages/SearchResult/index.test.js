import { shallow } from 'enzyme';
import SearchResult from './';
import  useSearchHooks  from "./hooks";

jest.mock('./hooks', () => jest.fn());

// jest.mock('./hooks', () => {
//     return {
//         __esModule: true,
//         default: () =>  ({
//             searchResult: [{
//                 id: 123,
//                 fields: [],
//                 webUrl: 'http://',
//                 tags: [{
//                     id: 12345,
//                     webTitle:'Web title'
//                 }]
//             }], 
//             pageCount: 100, 
//             isSearchData: false, 
//             handleOnPageChange: jest.fn(), 
//             handleTagKeywordClick: jest.fn()
//         })
//     }
// });


describe('SearchResult component', () => {

    const props = {
        searchResult: [{
            id: 123,
            fields: [],
            webUrl: 'http://',
            tags: [{
                id: 12345,
                webTitle:'Web title'
            }]
        }], 
        pageCount: 100, 
        isSearchData: true, 
        handleOnPageChange: jest.fn(), 
        handleTagKeywordClick: jest.fn()
    }

    
    it('should render snapshots when searchData found', () => {
        useSearchHooks.mockReturnValue({
            ...props
        })
        const wrapper =  shallow(<SearchResult {...props}/>);
        expect(wrapper).toMatchSnapshot();
    });
    
    it('should render snapshots when searchData not found', () => {
        const updatedProps = {
            ...props,
            isSearchData: false
        }
        useSearchHooks.mockReturnValue({
            ...updatedProps
        })
        const wrapper =  shallow(<SearchResult {...updatedProps}/>);
        expect(wrapper).toMatchSnapshot();
    });

})

