import { useState, useEffect, useMemo } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { fetchSearchList } from '../../services';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
   
    const [searchResult, setSearchResult] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    const [pageCount, setPageCount] = useState(0);
    const history = useHistory();
    const ItmesPerPage = 10;
    
    const  useQuery = () => {
        const { search } = useLocation();
        return useMemo(() => new URLSearchParams(search), [search]);
    }
    let query = useQuery();
    let searchParam;
    
    const handleOnPageChange = (event) => {
        setCurrentPage(event.selected + 1);
    };

    useEffect(() => {
        
        searchParam = query.get('query');
        fetchSearchList(searchParam, currentPage, ItmesPerPage).then(res => {
            setSearchResult(res?.data?.response?.results);
            setPageCount(res?.data?.response?.pages);
        });
    },[query, currentPage]);

    const handleTagKeywordClick = param => () => {
        history.push({
            pathname: '/search',
            search: `?query=${param}`,            
        })
    }
    
    return {
        searchResult: Array.from(searchResult),
        pageCount,
        isSearchData: Boolean(searchResult.length),
        searchParam,
        handleOnPageChange,
        handleTagKeywordClick 
    }
}

// export default useSearchHooks;