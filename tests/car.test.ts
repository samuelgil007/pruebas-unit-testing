import { buyCar, validateMoney, validatePlate } from "../src/use-cases/CarValidation";


const plate: string = "as2324344556";
const money: number = 66666;
const price: number = 12345;

test('should fail because nit is too long', () => {


    expect(validatePlate(plate)).toBe(false);
});

test('should fail because nit is too long', () => {



    expect(validateMoney(money)).toBe(true);
});


test('should fail because nit is too long', () => {

    const nit: string = "as2324344556";

    expect(buyCar(money,price)).toBeGreaterThanOrEqual(0);
});  