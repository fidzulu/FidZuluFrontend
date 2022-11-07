import { Toy } from './toy';

describe('Toy', () => {
  it('should create an instance', () => {
    expect(new Toy("name", "brand", "ageGroup", 23.00)).toBeTruthy();
  });
});
