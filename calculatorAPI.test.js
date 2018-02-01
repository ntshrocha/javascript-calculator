const Calculator = require('./calculatorAPI')
const c = new Calculator

it('chain mathematical operations properly', () => {
  c.result = 0
  c.add(2).subtract(3).multiply(2).divide(2)
  expect(c.result).toBe(-1)
})

it('divide two numbers', () => {
  c.result = 100
  c.divide(20)
  expect(c.result).toBe(5)
})

it('multiply two numbers', () => {
  c.result = 10
  c.multiply(5)
  expect(c.result).toBe(50)
})

it('subtract two numbers', () => {
  c.result = 10
  c.subtract(2)
  expect(c.result).toBe(8)
})

it('add two numbers', () => {
  c.result = 0
  c.add(2)
  expect(c.result).toBe(2)
})

it('clear result when reset is called', () => {
  c.result = 10
  c.reset()
  expect(c.result).toBe(0)
})