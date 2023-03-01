export const TodoItem = ({ todo, handlerRemoveTodo, onToggleTodo }) => {

    return (
        <li
            className="list-group-item d-flex justify-content-between"
            onDoubleClick={() => onToggleTodo(todo.id)}
        >
            <span className={`align-self-center ${todo.done ? 'text-decoration-line-through' : ''}`}>{todo.description}</span>
            <button
                className="btn btn-danger"
                onClick={() => handlerRemoveTodo(todo.id)}
            >
                Borrar
            </button>
        </li>
    );
};
