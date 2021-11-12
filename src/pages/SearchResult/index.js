import useSearchHooks from "./hooks";
import './styles.css';
import ReactPaginate from 'react-paginate';

const SearchResult = () => {
    const { searchResult, pageCount, isSearchData, handleOnPageChange, handleTagKeywordClick } = useSearchHooks();
    return (
        <div className="wrapper">
            {isSearchData && (searchResult.map(item => (
                <div className="thumbnail-wrapper">
                <div className="thumb-img" style={{ backgroundImage: `url(${item.fields.thumbnail})`}}></div>
                <div className="thumb-content">
                    <a href={item.webUrl} rel="noopener noreferrer" target="_blank"><h2>{item.fields.headline}</h2></a>  
                    <div className="tags">
                        {item.tags.map(tag=>(
                            <span onClick={()=> handleTagKeywordClick(tag.webTitle)}>{tag.webTitle}</span>
                        ))}
                    </div>  
                </div>
            </div>
            )))}
            {isSearchData && (<ReactPaginate 
                breakLabel="..." 
                nextLabel=">" 
                previousLabel="<" 
                onPageChange={handleOnPageChange}
                pageCount={pageCount}
                className="pagination-container"
                pageClassName="pagination-item"
                pageRangeDisplayed={5}
                marginPagesDisplayed={1}
                />)}

            {!isSearchData && (<div className="no-result">
                <p>No result found </p>
                <p><a href="/">Click here</a> to search again.</p>
            </div>)}
        </div>
    );
};

export default SearchResult;
