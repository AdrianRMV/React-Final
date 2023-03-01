import { useTodo } from '../hooks/useTodo';
import { TodoAdd, TodoList } from './components';

export const TodoApp = () => {

    const [todos, handlerTodoAdd, handlerRemoveTodo, handlerToggleTodo] = useTodo();

    return (
        <>
            <h1>
                TodoApp: {todos.length}, <small>pendientes:</small>
            </h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList
                        todos={todos}
                        handlerRemoveTodo={handlerRemoveTodo}
                        onToggleTodo={handlerToggleTodo}
                    />
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
