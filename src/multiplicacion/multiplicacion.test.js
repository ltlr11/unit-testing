// multiplicacion.test.js
const multiplicar = require('./multiplicacion');

describe('Multiplicación', () => {
  test('Multiplicación mínima', () => {
    expect(multiplicar(0, 5)).toBe(0);
  });

  test('Multiplicación máxima', () => {
    expect(multiplicar(Number.MAX_SAFE_INTEGER, 1)).toBe(Number.MAX_SAFE_INTEGER);
  });

  test('Multiplicación intermedia', () => {
    expect(multiplicar(3, 7)).toBe(21);
  });
});