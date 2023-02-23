import {
    getHeroeById,
    getHeroesByOwner,
} from '../../src/base-pruebas/08-imp-exp';
// import heroes from '../../src/data/heroes';


describe('Pruebas en 08-imp-exp', () => {
    test('Debe retornar un heroe por ID', () => {
        const id = 1;
        const hero = getHeroeById(id);

        expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
    });
    test('Debe retornar un undefind si no existe', () => {
        const id = 100;
        const hero = getHeroeById(id);

        console.log(hero); // undefined por que no existe un heroe con un id = 100

        expect(hero).toBeFalsy(); // toBeFalsy verifica que sean datos incorrectos (null, undefined, vacio).
    });

    // TODO: Tarea

    test('Debe retornar un arreglo con los heroes de DC con el numero de heroes', () => {
        const numHeroesMarvel = getHeroesByOwner('DC').length;
        expect(numHeroesMarvel).toBe(3);
    });

    test('Debe retornar un arreglo con los heroes de DC y compararlos uno con unos', () => {
        
        const owner = 'DC';
        const numHeroesMarvel = getHeroesByOwner(owner);
        expect(numHeroesMarvel).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' },
        ]);

        // ! Manera apropiada de hacerlo
        expect(numHeroesMarvel).toEqual(numHeroesMarvel.filter((heroe) => heroe.owner === owner));

    });

    test('Debe retornar un arreglo con los heroes de Marvel con el numero de heroes', () => {
        const numHeroesMarvel = getHeroesByOwner('Marvel').length;
        expect(numHeroesMarvel).toBe(2);
    });

    test('Debe retornar un arreglo con los heroes de Marvel y compararlos uno con unos', () => {
        const numHeroesMarvel = getHeroesByOwner('Marvel');
        expect(numHeroesMarvel).toEqual([
            { id: 2, name: 'Spiderman', owner: 'Marvel' },
            { id: 5, name: 'Wolverine', owner: 'Marvel' },
        ]);
    });
});
