import { convertToUTCDate, isEqual } from './ch-2';

describe('Date Util Test', () => {
  test('it should return true when two dates are equal', () => {
    const isDatesEqual = isEqual(new Date(), new Date());
    expect(isDatesEqual).toEqual(true);
  });

  test('it should return false when two dates are not equal', () => {
    const isDatesEqual = isEqual(new Date('2023-03-01'), new Date());
    expect(isDatesEqual).toEqual(false);
  });
});

describe('Date Util Test to Convert UTC Date String', () => {
  test('should convert a date string to UTC date string', () => {
    const utcDate = convertToUTCDate('2023-03-01T10:20:30');
    expect(utcDate).toEqual('Wed, 01 Mar 2023 04:35:30 GMT');
  });

  test('should handle dates with no time component', () => {
    const utcDate = convertToUTCDate('2023-03-01');
    expect(utcDate).toEqual('Wed, 01 Mar 2023 00:00:00 GMT');
  });

  test('should handle dates with timezones other than UTC', () => {
    const utcDate = convertToUTCDate('Wed, 01 Mar 2023 23:15:30 GMT+05:45');
    expect(utcDate).toEqual('Wed, 01 Mar 2023 17:30:30 GMT');
  });
});
