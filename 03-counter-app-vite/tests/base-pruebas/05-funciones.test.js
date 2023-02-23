import { getUser, getUsuarioActivo } from '../../src/base-pruebas/05-funciones';

describe('Pruebas 05 funciones', () => {
    test('getUser debe retornar un objeto', () => {
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502',
        };

        const user = getUser();

        // ! Un objeto nunca sera igual a otro
        
        /*
            * Para comparar objetos NO usar toBe por que aun que tengan las mismas propiedades, los objetos no
            * apuntan a las mismas localizaciones de memoria donde se almacenan, asi que es necesario usar toEqual o toStricEqual
        */ 

        expect(testUser).toStrictEqual(user);
    });

    test('getUsuarioActivo debe retornar un objeto', () => {
        const name = 'Adrian';
    
        const user = getUsuarioActivo(name);

        expect( user ).toStrictEqual({
            uid: 'ABC567',
            username: name,
        });
        
    });
});
