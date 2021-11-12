import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { fetchSearchKeywords } from '../../services';

const useHooks = () => {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState({});
    let history = useHistory();

    const handleInputChange = (e) => {
        setSearchValue(e.target.value);       
    };

    useEffect(()=>{
        let delay = setTimeout(()=>{
            if(searchValue){
                fetchSearchKeywords(searchValue).then(res=>{
                    setSearchResult(res?.data?.response?.results)
                })
            }
        }, 1000)
        return () => clearTimeout(delay);
    },[searchValue])
    
    const onHandleClick = () => {
        history.push({
            pathname: '/search',
            search: `?query=${searchValue}`,
        });   
      };

    const handleKeywordClick = (param) => {
        setSearchValue(param);
        history.push({
            pathname: '/search',
            search: `?query=${param}`,
        }); 
    }

    return{
        searchValue,
        searchResult: Array.from(searchResult),
        handleInputChange,
        onHandleClick,
        handleKeywordClick
    }
}
export default useHooks;