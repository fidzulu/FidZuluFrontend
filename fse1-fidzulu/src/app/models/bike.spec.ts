import { Bike } from './bike';

describe('Bike', () => {
  it('should create an instance', () => {
    expect(new Bike("name", "brand", "color", 23.00)).toBeTruthy();
  });
});
