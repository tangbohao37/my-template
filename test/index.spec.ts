import demoFunc from '../src'

describe('test', () => {
  it('should not throw error', () => {
    expect(demoFunc).not.toThrowError()
  })
})
