import { calculateSimpleInterest } from './ch-1';

describe('Calculate Simple Interest', () => {
  test('it should return the simple interest with correct parameters', () => {
    const simpleInterest = calculateSimpleInterest(1000, 1, 10);
    expect(simpleInterest).toBe(100);
  });

  test('it should return positive value with positive parameter values', () => {
    const simpleInterest = calculateSimpleInterest(1000, 1, 10);
    expect(simpleInterest).not.toBeLessThanOrEqual(-1);
  });
});
