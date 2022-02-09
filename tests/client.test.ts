import {validateNit} from '../src/use-cases/ClientValidation';

test('should fail because nit is too long', () => {

 let nit: string ="as2324344556";

 expect(validateNit(nit)).toBe(false); 
});
