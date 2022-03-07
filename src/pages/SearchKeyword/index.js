import './styles.css';

const SearchKeyword = ({data, handleKeywordClick}) => (
    <div className="dropdown-container">
        <ul>
            {data.map(keyword => (
                <li key={keyword.id} onClick={handleKeywordClick(keyword.webTitle)}>{keyword.webTitle}</li>
            ))}
        </ul>
    </div>
);

export default SearchKeyword;
