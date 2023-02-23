import { fireEvent, render, screen } from '@testing-library/react';
import { CounterApp } from '../src/CounterApp';

const value = 100;

describe('Pruebas en CounterApp', () => {
    test('Debe de hacer match con el snapshot', () => {
        const { container } = render(<CounterApp value={100} />);
        expect(container).toMatchSnapshot();
    });

    test('Debe mostrar el valor inicial de 100', () => {
        render(<CounterApp value={value} />);
        expect(screen.getByText(value)).toBeTruthy();
    });

    test('Debe incrementar con el boton +1', () => {
        render(<CounterApp value={10} />);

        /*
         * fireEvent simula un click al momento de llamarse, tecnicamente pica el boton
         * generando la accion que este desemboca.
         */

        fireEvent.click(screen.getByText('+1'));
        expect(screen.getByText('11')).toBeTruthy();
    });

    test('Debe decrementar con el boton -1', () => {
        render(<CounterApp value={10} />);
        fireEvent.click(screen.getByText('-1'));
        expect(screen.getByText('9')).toBeTruthy();
    });

    test('Debe funcionar el boton de Reset', () => {
        render(<CounterApp value={355} />);
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));

        // * Buscamos el boton por el nombre, que se le asigno con un aria-label
        fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));
        
        expect(screen.getByText(355)).toBeTruthy();
    });
});
