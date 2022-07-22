import '../styleSheets/Counter.css';

function Counter({ counter }) {
    return (
        <div className='counter'>
            {counter}
        </div>
    );
}

export default Counter;