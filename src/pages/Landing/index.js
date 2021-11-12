import { useRef } from 'react'
import SearchInput from '../../components/SearchInput';
import Button from '../../components/Button';
import SearchKeyword from '../SearchKeyword'
import useHooks from './hooks';
import './styles.css';

const Landing = () => {
    const ref = useRef(null);
    const { searchValue ,searchResult, handleInputChange, onHandleClick, handleKeywordClick } = useHooks(ref);
    return (
        <div>
            <h1>News Lister</h1>
            <SearchInput ref={ref} handleInputChange={handleInputChange} />
            {searchValue && (<SearchKeyword data={searchResult} handleKeywordClick={handleKeywordClick} />)}
            <Button onHandleClick={onHandleClick}>{'Search'}</Button>
        </div>
    )
};

export default Landing;
