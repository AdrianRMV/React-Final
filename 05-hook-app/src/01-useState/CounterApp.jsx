import { useState } from 'react';

export const CounterApp = () => {
    const [counter, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
    });

    const { counter1, counter2, counter3 } = counter;

    return (
        <>
            <h1> Counter: {counter1}</h1>
            <h1> Counter: {counter2}</h1>
            <h1> Counter: {counter3}</h1>

            <hr />
            <button
                className="btn bg-success"
                // El set de un useState siempre remplazara toda la informacion que tenga el estado por el nuevo dado, asi que si el objetivo es solo reemplazar como en este caso solo un atributo del objeto, es necesario indicar con el operador spread que tendra lo que ya tenia la variable y ademas el cambio posterior en este caso la suma de un numero en el primer atributo del objeto (counter1)
                onClick={() => setCounter({
                    ...counter,
                    counter1: counter1 + 1,
                })}
            >
                +1
            </button>
        </>
    );
};
