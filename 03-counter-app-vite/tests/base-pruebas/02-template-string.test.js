import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('Prueba 02 template string', () => {
    test('getSaludo debe retornar "Hola fernando', () => { 
        
        const name = 'adrian';
        const message = getSaludo(name);

        expect( message ).toBe(`Hola ${name}`);

    })
});
