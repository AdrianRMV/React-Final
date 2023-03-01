import { useEffect, useReducer } from 'react';
import { todoReducer } from '../08-useReducer/todoReducer';

export const useTodo = () => {
    const initialState = [];

    const init = () => {
        // Explicitamente dice: "retorname la conversion de el string que esta en el localStorage con el nombre de 'todos' a un objeto y si es null retorna un objeto vacio, esto para que no cause error."
        return JSON.parse(localStorage.getItem('todos')) || [];
    };

    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handlerTodoAdd = (todo) => {
        const action = {
            type: '[TODO] add todo',
            payload: todo,
        };

        dispatch(action);
    };

    const handlerRemoveTodo = (id) => {
        dispatch({
            type: '[TODO] Remove todo',
            payload: id,
        });
    };

    const handlerToggleTodo = (id) => {
        console.log(id);
        dispatch({
            type: '[TODO] Toggle todo',
            payload: id,
        });
    };
    return [todos, handlerTodoAdd, handlerRemoveTodo, handlerToggleTodo];
};
