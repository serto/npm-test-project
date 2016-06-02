import { expect } from 'chai';
import { fizzbuzz } from '../src/js/fizzbuzz';

describe('Kata Fizz Buzz', () => {
  it('Should return a given number as a string', () => {
    expect(fizzbuzz(1)).to.eql('1');
  });


  it('Should return FIZZ if number is divisible by 3', () => {
  	expect(fizzbuzz(6)).to.eql('FIZZ');
  });


  it('Should return BUZZ if number is divisible by 5', () => {
  	expect(fizzbuzz(10)).to.eql('BUZZ');
  });


  it('Should return FIZZBUZZ if number is divisible by 3 and 5', () => {
  	expect(fizzbuzz(15)).to.eql('FIZZBUZZ');
  });

});