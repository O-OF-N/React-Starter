import { addTwoNumbers } from '../../src/components/connections/Connections';
import chai from 'chai';

const assert = chai.assert;
const expect = chai.expect;

describe('Test add two numbers', () => {
  it('adds two numbers',()=>{
    assert(addTwoNumbers(1,2)===3);
  });
});