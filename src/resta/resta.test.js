const restar = require('./resta');

describe('Resta', () => {
  test('Resta mínima', () => {
    expect(restar(1, 1)).toBe(0);
  });

  test('Resta máxima', () => {
    expect(restar(Number.MAX_SAFE_INTEGER, 1)).toBe(Number.MAX_SAFE_INTEGER - 1);
  });

  test('Resta intermedia', () => {
    expect(restar(10, 5)).toBe(5);
  });
});