import { forwardRef } from 'react';
import './styles.css';

const SearchInput = ({handleInputChange}, ref) => (
    <div className="InputBox">
        <input ref={ref} onChange={(e)=>handleInputChange(e)} type="text" />
    </div>
);

export default forwardRef(SearchInput);
