import { Color, ColorValue } from '../src/examples/color'

test('Main test', () => {
  expect(Color.BLUE.value).toBe('blue')
  expect(Color.EMPTY.value).toBe('')

  const all = Color.getAll()
  expect(all.length).toBe(3)
  expect(all[1]?.label).toBe('Green')

  expect(Color.getByKey('wrong')).toEqual(Color.EMPTY)
  expect(Color.getByKey('RED')).toEqual(Color.RED)

  expect(Color.isEmpty(Color.RED)).toBe(false)
  expect(Color.isEmpty(Color.EMPTY)).toBe(true)

  expect(Color.getByLabel('Some')).toEqual(Color.EMPTY)
  expect(Color.getByLabel('Blue')).toEqual(Color.BLUE)

  expect(() => {
    const p: ColorValue = Color.RED
    p.label = '123'
  }).toThrow()
})
