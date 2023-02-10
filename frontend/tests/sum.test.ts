import sum from '../src/sum'
import { describe, it, expect } from 'vitest'

describe('#sum', () => {
  it('should sum numbers', () => {
    expect(sum()).toBe(0)
  })
})
