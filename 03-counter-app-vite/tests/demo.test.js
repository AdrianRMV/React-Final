describe('Purebas a <DemoComponent />', () => {
    test('Esta prueba no debe de falla', () => {
        // 1.- Inicializacion
        const mensaje1 = 'Hola mundo';

        // 2.- Estimulo
        const mensaje2 = mensaje1.trim();

        // 3.- Observar comportamiento
        expect(mensaje1).toBe(mensaje2);
    });
});
