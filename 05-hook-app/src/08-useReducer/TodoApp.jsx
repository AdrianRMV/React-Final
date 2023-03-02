import { useTodo } from '../hooks';
import { TodoAdd, TodoList } from './components';

export const TodoApp = () => {
    const {
        todos,
        todosCount,
        pendingTodoCount,
        handlerTodoAdd,
        handlerRemoveTodo,
        handlerToggleTodo,
    } = useTodo();

    return (
        <>
            <h1>
                TodoApp: {todosCount},{' '}
                <small>pendientes: {pendingTodoCount}</small>
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
