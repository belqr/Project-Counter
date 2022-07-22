import '../styleSheets/Button.css';

function Button({ text, ButtonClick, handleCounter, disabled }) {
    return (
        <button disabled={disabled} className={ ButtonClick } onClick={handleCounter}>
            {text}
        </button>
    )
}
export default Button;