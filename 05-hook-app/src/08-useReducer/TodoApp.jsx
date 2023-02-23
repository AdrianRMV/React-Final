import { useReducer } from 'react';
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

    const [state, dispatch] = useReducer(todoReducer, initialState);

    return (
        <>
            <h1>TodoApp: 10, <small>pendientes: 2</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <ul className="list-group">
                        <li className="list-group-item d-flex justify-content-between">
                            <span className="align-self-center">Item 1</span>
                            <button className="btn btn-danger">Borrar</button>
                        </li>
                    </ul>
                </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <form>
                        <input
                            type="text"
                            name=""
                            id=""
                            className="form-control"
                            placeholder="¿Que hay que hacer?"
                        />
                        <button
                            type="submit"
                            className="btn btn-outline-primary mt-2"
                        >
                            Agregar
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};
