import { asyncFuncAccept, asyncFuncReject } from './ch-6';

describe('Test asynchronous function', () => {
  test('it should call async function and accept the value.', async () => {
    expect(asyncFuncAccept()).resolves.toBe(100);
  });

  test('it should call async function and reject the value.', async () => {
    const errorObject = new Error('Rejected!');
    try {
      await asyncFuncReject();
    } catch (error) {
      expect(error).toEqual(errorObject);
    }
  });
});
