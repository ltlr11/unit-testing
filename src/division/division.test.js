const dividir = require('./division');

describe('División', () => {
  test('División mínima', () => {
    expect(dividir(0, 5)).toBe(0);
  });

  test('Intento de división por cero', () => {
    expect(() => dividir(5, 0)).toThrow('No se puede dividir por cero');
  });

  test('División intermedia', () => {
    expect(dividir(10, 2)).toBe(5);
  });
});