import { useForm } from '../hooks/useForm';

export const FormWithCustomHook = () => {
    const { formState, onInputChange, onResetForm } = useForm({
        username: '',
        email: '',
        password: '',
    });

    const { username, email, password } = formState;

    return (
        <>
            <h1>Formulario con Custom hook</h1>

            <hr />

            <input
                type="text"
                name="username"
                id=""
                className="form-control"
                value={username}
                onChange={onInputChange}
                placeholder="Nombre de usuario"
            />

            <input
                type="email"
                name="email"
                value={email}
                placeholder="Adrian@gmail.com"
                className="form-control mt-2"
                onChange={onInputChange}
            />

            <input
                type="password"
                name="password"
                value={password}
                placeholder="Contrasena"
                className="form-control mt-2"
                onChange={onInputChange}
            />

            <button onClick={onResetForm} className="btn btn-primary mt-3">
                Borrar
            </button>
        </>
    );
};
