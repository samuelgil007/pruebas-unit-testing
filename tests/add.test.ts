import {sum} from '../src/use-cases/sum';

test('should first', () => {

 let num1: number =1;
 let num2: number =2;
 expect(sum(num1,num2)).toBe(3); 
});
