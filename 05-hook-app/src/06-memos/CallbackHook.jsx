import { useCallback, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {
    const [counter, setCounter] = useState(10);

    // useCallback sirve para memorizar funciones
    const incrementFather = useCallback(
        (value = 1) => {
            // c = valor del counter actual
            // value = valor que se le indicara por parametro
            setCounter((c) => c + value);
        },[]
    );

    return (
        <>
            <h1>UseCallback Hook: {counter}</h1>
            <hr />

            <ShowIncrement increment={incrementFather} />
        </>
    );
};
