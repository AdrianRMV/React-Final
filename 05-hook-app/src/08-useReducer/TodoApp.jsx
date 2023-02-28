import { useEffect, useReducer } from 'react';
import { TodoAdd, TodoList } from './components';
import { todoReducer } from './todoReducer';

export const TodoApp = () => {
    const initialState = [
        // {
        //     id: new Date().getTime(),
        //     description: 'Recolectar la piedra del alama',
        //     done: false,
        // },
        // localStorage.getItem('todos'),
    ];

    const init = () => {
        // Explicitamente dice: "retorname la conversion de el string que esta en el localStorage con el nombre de 'todos' a un objeto y si es null retorna un objeto vacio, esto para que no cause error."
        return JSON.parse(localStorage.getItem('todos')) || [];
    }

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

    return (
        <>
            <h1>
                TodoApp: 10, <small>pendientes: 2</small>
            </h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList todos={todos} />
                </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <TodoAdd handlerTodoAdd={handlerTodoAdd} />
                </div>
            </div>
        </>
    );
};
