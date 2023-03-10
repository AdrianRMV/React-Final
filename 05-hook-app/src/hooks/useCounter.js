import { useState } from 'react';

export const useCounter = (initialValue = 10) => {
    const [counter, setCounter] = useState(initialValue);

    const incrementValue = (value = 1) => {
        setCounter(counter + value);
    };
    const decrementValue = (value) => {
        if (counter <= 0) return; // Retorna si el counter es igual a 0

        setCounter(counter - value);
    };
    const resetValue = () => {
        setCounter(initialValue);
    };

    return {
        counter,
        incrementValue,
        decrementValue,
        resetValue,
    };
};
