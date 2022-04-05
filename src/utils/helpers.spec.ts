import { expect } from 'chai';
import {isPlainObject} from "./helpers";

describe('Helpers', () => {
   describe('isPlainObject', () => {
       it('should return true if plain object passed', () => {
           const object = {};

           const result = isPlainObject(object);

           expect(result).to.be.true;
       });

       it('should return false if number passed', () => {
           const number = 1;

           const result = isPlainObject(number);

           expect(result).to.be.false;
       });

       it('should return false if array passed', () => {
           const array: any[] = [];

           const result = isPlainObject(array);

           expect(result).to.be.false;
       });

       it('should return false if null passed', () => {
          const result = isPlainObject(null);

          expect(result).to.be.false;
       });
   });
});