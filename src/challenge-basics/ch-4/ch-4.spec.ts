import { getToken, setAvailableToken } from './ch-4';

describe('Token Util Test', () => {
  test('it should return success with available tokens', () => {
    const avaialableToken = 100;
    const successMock = jest.fn();
    const errorMock = jest.fn();
    getToken(successMock, errorMock);
    expect(successMock).toHaveBeenCalledWith(avaialableToken);
  });

  test('it should call onSuccess callback only once', () => {
    const successMock = jest.fn();
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    getToken(successMock, () => {});
    expect(successMock).toHaveBeenCalledTimes(1);
  });

  test('it should call onSuccess callback with only one argument', () => {
    const successMock = jest.fn();
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    getToken(successMock, () => {});
    expect(successMock).toHaveBeenCalledTimes(1);
    expect(successMock.mock.calls.length).toBe(1);
  });

  test('it should call error callback when tokens are not avaialable', () => {
    const errorMock = jest.fn();
    setAvailableToken(0);
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    getToken(() => {}, errorMock);
    expect(errorMock).toHaveBeenCalled();
    expect(errorMock).toHaveBeenCalledWith(new Error('Token not available!'));
  });

  test('it should call onError callback with only one argument', () => {
    const errorMock = jest.fn();
    setAvailableToken(0);
    getToken(() => true, errorMock);
    expect(errorMock.mock.calls.length).toBe(1);
  });
});
