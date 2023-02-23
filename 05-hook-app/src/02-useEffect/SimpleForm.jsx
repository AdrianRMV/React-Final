import { useEffect, useState } from 'react';
import { Message } from './Message';

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        username: 'adrian',
        email: 'adrian@gmail.com',
    });

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;

        // Deja el objeto formState con lo que ya estaba y solo modifica el campo por el nombre dado, utilizando los corchetes para identificar el nombre de la propiedad "[ name ]"
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    // useEffect(() => {
    //     console.log('UseEffect Called!');
    // }, []);

    // useEffect(() => {
    //     console.log('formState Changed!');
    // }, [formState]);

    // useEffect(() => {
    //     console.log('Email Changed!');
    // }, [email]);

    return (
        <>
            <h1>Simple Form</h1>

            <hr />

            <input
                type="text"
                name="username"
                id=""
                className="form-control"
                value={username}
                onChange={onInputChange}
            />

            {
                (username === 'adrian2') && <Message />
            }

            <input
                type="email"
                name="email"
                value={email}
                placeholder="Adrian@gmail.com"
                className="form-control mt-2"
                onChange={onInputChange}
            />
        </>
    );
};
