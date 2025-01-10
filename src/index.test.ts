import { resizeObserverPolyfill } from '.';

describe('resizeObserverPolyfill', () => {
  it('normal', async () => {
    expect(resizeObserverPolyfill('Foo', 'Bar')).toBe('Foo Bar');
  });

  it('lastName upper case', async () => {
    expect(resizeObserverPolyfill('Foo', 'Bar', { lastNameUpperCase: true })).toBe('Foo BAR');
  });
});
