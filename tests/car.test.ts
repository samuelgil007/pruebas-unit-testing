import { buyCar, validateMoney, validatePlate } from "../src/use-cases/CarValidation";


const plate: string = "as2324344556";
const money: number = 66666;
const price: number = 12345;

test('should fail because plate is too large', () => {


    expect(validatePlate(plate)).toBe(false);
});

test('should pass because user has money', () => {



    expect(validateMoney(money)).toBe(true);
});


test('should pass because user has enough money to buy a car', () => {



    expect(buyCar(money,price)).toBeGreaterThanOrEqual(0);
});  