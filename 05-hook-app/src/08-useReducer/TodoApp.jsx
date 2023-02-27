import { useReducer } from 'react';
import { TodoAdd, TodoList } from './components';
import { todoReducer } from './todoReducer';

export const TodoApp = () => {
    const initialState = [
        {
            id: new Date().getTime(),
            description: 'Recolectar la piedra del alama',
            done: false,
        },
        {
            id: new Date().getTime() + 100,
            description: 'Recolectar la piedra del alama',
            done: false,
        },
    ];

    const [todos, dispatch] = useReducer(todoReducer, initialState);

    const handlerTodoAdd = (todo) => {
        console.log({todo})
    }

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
                    <TodoAdd handlerTodoAdd={handlerTodoAdd}/>
                </div>
            </div>
        </>
    );
};
