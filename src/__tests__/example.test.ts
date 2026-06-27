import { describe, it, expect } from 'vitest';

describe('example test', () => {
  it('should pass', () => {
    expect(true).toBe(true);
  });

  it('should demonstrate assertions', () => {
    const value = 42;
    expect(value).toBe(42);
    expect(value).toBeGreaterThan(40);
    expect(value).toBeLessThan(50);
  });
});
