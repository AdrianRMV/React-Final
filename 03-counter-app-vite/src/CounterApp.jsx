import { useState } from 'react';
import PropTypes from 'prop-types';


export const CounterApp = ({ value }) => {
    
    /*
        * [ Variable que se usara | Funcion para cambiar el estado de la variable ] = useState( Estado inicial de la variable en este caso "0" )
    */
    const [ counter, setCounter ] = useState( value );

    const handleAdd = () => {
        setCounter(counter + 1);
    };

    const handleSubstract = () => counter > 0 ? setCounter(counter - 1) : console.log("No puede ser numero negativo")

    const handleReset = () => setCounter(value);
    
    return (
        <>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>
            <button onClick={handleAdd}> +1 </button>
            <button onClick={handleSubstract}> -1 </button>
            <button aria-label="btn-reset" onClick={handleReset}> Reset </button>
        </>
    );
};

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
};
