import { cleaner } from './cleaner';
import movieStub from '../stub/movieStub.json';

describe('cleaner test', () => {
  test('cleaner is a function', () => {
    expect(cleaner).toBeInstanceOf(Function);
  });

  test('cleaner returns an object', () => {
    expect(cleaner).toBeInstanceOf(Object);
  });

  test('returned object has 181 values', () => {
    const cleanedData = cleaner(movieStub);
    expect(Object.keys(cleanedData).length).toBe(20);
  });
});
