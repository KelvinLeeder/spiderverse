const Spiderman = require('./../app/spiderman')
describe("Unit Test for spiderman class", () => {
    test('Creat an Spiderman object', () => {

        //Aqui escribimos el codigo que queremos usar
        //Quiero poder instanciar un objeto spiderman con esta informacion

        const andrewGarfield = new Spiderman("Spiderman Sony", 31, "Andrew Garfield", 2, "Sony")

        //Validamos que este codigo funcione de la forma esperada
        expect(andrewGarfield.name).toBe("Spiderman Sony")
        expect(andrewGarfield.age).toBe(31)
        expect(andrewGarfield.actor).toBe("Andrew Garfied")
        expect(andrewGarfield.movies).toBe(2)
        expect(andrewGarfield.studio).toBe("Sony")
    });
})