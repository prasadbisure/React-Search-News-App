import './styles.css';  

const Button = ({children,onHandleClick}) => (
    <div>
        <button className='button' onClick={() => onHandleClick()}>{children}</button>
    </div>
);

export default Button;
