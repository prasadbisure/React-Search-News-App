import axios from 'axios';
import api from './api';

jest.mock('axios', () => ({
    post: jest.fn(),
    get: jest.fn()
}))


describe('Service api', () => {
    it('should test api()', () => {
        const expectedEndpoint = "http://test.com?q=123";
        
        api('http://test.com?', 'q=123');

        expect(axios.get).toHaveBeenCalledWith(expectedEndpoint)
    })
})