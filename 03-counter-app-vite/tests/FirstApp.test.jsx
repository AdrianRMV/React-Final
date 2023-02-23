import { render } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Pruebas en FirstApp', () => {
    // test('Debe ser match con el snapshot', () => {

    //     const title = 'Hola soy goku';
    //     const {container} = render( <FirstApp title = { title } /> );

    //     expect(container).toMatchSnapshot();

    // });

    test('Debe de mostrar el titulo en un h1', () => {
        const title = 'Hola soy goku';
        const { container, getByText, getByTestId } = render(
            <FirstApp title={title} />
        );

        expect(getByText(title)).toBeTruthy();

        /*
         * Con el toBe verificara que no sea exactamente igual el titulo con el que esta
         * en el DOM, eso quiere decir que hasta los ESPACIOS en blanco cuentan
         *
         * Para solo buscar que este el texto dentro de una etiqueta h1 sin importar
         * los espacios, solamente el TEXTO se usa "toContain"
         */

        // const h1 = container.querySelector('h1');
        // expect(h1.innerHTML).toContain(title);

        expect(getByTestId('test-title').innerHTML).toContain(title);
    });

    test('Debe de mostrar el subtitulo enviado por props', () => {
        const title = 'Hola soy goku';
        const subtitle = 'Soy un subtitulo';
        const { getAllByText } = render(
            <FirstApp 
                title={title} 
                subtitle = { subtitle }
            />
        );

        expect(getAllByText(subtitle).length).toBe(2);
    });
});
