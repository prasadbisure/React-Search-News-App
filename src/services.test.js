import api from  './api';
import { fetchSearchKeywords, fetchSearchList } from './services';

jest.mock('./api', () => jest.fn(() => ({data: {}})));

describe('should call api() with correct data', () => {
    it('should test fetchSearchKeywords()', async () => {
        const params = 'test';
        const queryParams = `&q=${ params }` 
        fetchSearchKeywords(params);
        expect(api).toBeCalledWith('https://content.guardianapis.com/tags?show-references=all&api-key=test', queryParams)
    })
    
    it('should test fetchSearchList()', async () => {
        const searchPara = 'test';
        const currentPage = 'test';
        const itmesPerPage = 'test';

        const queryParams = `&q=${searchPara}&page=${currentPage}&page-size=${itmesPerPage}` 
        fetchSearchList(searchPara, currentPage, itmesPerPage);
        expect(api).toBeCalledWith('https://content.guardianapis.com/search?api-key=test&show-fields=thumbnail,headline&show-tags=keyword', queryParams)
    })
});
