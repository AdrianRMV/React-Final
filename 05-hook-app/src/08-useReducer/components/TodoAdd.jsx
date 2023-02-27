import { useState } from 'react';
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({ handlerTodoAdd }) => {

    const { description, onInputChange, onResetForm } = useForm({
        description: '',
    });

    const onNewTodo = (e) => {
        e.preventDefault();
        if (description.length <= 1) return;
       
        handlerTodoAdd({
            id: new Date().getTime(),
            done: false,
            description,
        });
        onResetForm();
    };
    return (
        <form onSubmit={onNewTodo}>
            <input
                type="text"
                name="description"
                className="form-control"
                placeholder="¿Que hay que hacer?"
                value={description}
                onChange={onInputChange}
            />
            <button
                type="submit"
                className="btn btn-outline-primary mt-2"
                onClick={onNewTodo}
            >
                Agregar
            </button>
        </form>
    );
};
