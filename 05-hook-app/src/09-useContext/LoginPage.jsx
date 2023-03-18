import { useContext } from 'react';
import { UserContext } from './context/UserContext';

export const LoginPage = () => {
    const { user,setUser } = useContext(UserContext);

    return (
        <div>
            <h1>LoginPage</h1>
            <br />
            <pre>{user && JSON.stringify(user)}</pre>
            <button
                className="btn btn-primary"
                onClick={() =>
                    setUser({ id: 123, name: 'Adrian', lastname: 'Ramirez' })
                }
            >
                Establecer Usuario
            </button>
        </div>
    );
};
