import { Food } from './food';

describe('Food', () => {
  it('should create an instance', () => {
    expect(new Food("name", "brand", "weight", 445, 23.00)).toBeTruthy();
  });
});
