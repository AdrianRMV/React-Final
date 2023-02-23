import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe('Pruebas en 07-deses-arr', () => {
    test('Debe rotarnor un string y un numero', () => {

        const [letters, numbers ] = retornaArreglo();
        expect(letters).toBe('ABC');
        expect(numbers).toBe(123);

        expect(typeof letters).toBe('string'); // type of me regresa una string diciendo que tipo de variable es en este caso "string"
        expect(typeof numbers).toBe('number'); // Para este caso el type of retorna una cadena diciendo "number"

        expect( letters ).toEqual(expect.any(String)); // Espera que sea CUALQUIER tipo de string

    });
});
