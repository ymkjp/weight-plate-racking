// @flow

const wpr = require('../src/weight-plate-racking')

test('Empty-in, empty-out', () => {
  expect(wpr.sort([])).toStrictEqual([])
})

test('Empty-in, empty-out', () => {
  expect(wpr.sort([
  ], 20)).toStrictEqual([
  ])
})
