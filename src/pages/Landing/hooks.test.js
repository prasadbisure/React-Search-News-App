import { act, renderHook } from '@testing-library/react-hooks';
import { fetchSearchKeywords } from '../../services'
import useHooks from './hooks';


const mockFunc = jest.fn();

jest.mock('react-router-dom', () => ({
    useHistory: () => ({
        push: mockFunc
    })
}));

jest.mock('../../services', () => ({
    fetchSearchKeywords: () => Promise.resolve({
        data: {
            response: {
                result:[{
                    id:1,
                    title: 'test'
                },{
                    id:2,
                    title: 'test2'
                }]
            }
        }
    })
}));


describe('Landing Hooks', ()=> {

    it('should test default states', async() =>{
        jest.useFakeTimers();
        const { result } = renderHook(() => useHooks())
        
        jest.runAllTimers();
        act(()=> fetchSearchKeywords('test'))
        
        expect(result.current.searchValue).toEqual('')
        expect(result.current.searchResult).toEqual([])
    })

    it('should test handleInputChange()', () =>{
        const { result } = renderHook(() => useHooks())
        const e = {
            target: {
                value: 'Test string'
            }
        }
        act(() => {
            result.current.handleInputChange(e);
        })
        expect(result.current.searchValue).toEqual('Test string')
    })

    it('should test onHandleClick()', () =>{
        const { result } = renderHook(() => useHooks())
        
        act(() => {
            result.current.onHandleClick();
        })
        expect(mockFunc).toBeCalled();
    })
    
    it('should test handleKeywordClick()', () =>{
        const { result } = renderHook(() => useHooks())
        
        act(() => {
            result.current.handleKeywordClick('test params')();
        })
        expect(result.current.searchValue).toEqual('test params');
        expect(mockFunc).toBeCalled();
    })
    
});

