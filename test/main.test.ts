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

  expect(Color.fromObject({})).toEqual(Color.EMPTY)
  expect(
    Color.fromObject({
      label: 'Blue',
    })
  ).toEqual(Color.EMPTY)
  expect(
    Color.fromObject({
      label: 'Blue',
      value: 'blue2',
    })
  ).toEqual(Color.EMPTY)
  expect(
    Color.fromObject({
      label: 'Blue',
      value: 'blue',
    })
  ).toEqual(Color.BLUE)
  expect(
    Color.fromObject({
      label: 'Blue',
      value: 'blue',
      other: 322,
    })
  ).toEqual(Color.BLUE)

  expect(Color.toJson(Color.RED)).toBe('{"label":"Red","value":"red"}')

  expect(Color.fromJson('%123')).toEqual(Color.EMPTY)
  expect(Color.fromJson('44')).toEqual(Color.EMPTY)
  expect(Color.fromJson('{}')).toEqual(Color.EMPTY)
  expect(Color.fromJson('{"label":"Red","value":"red2"}')).toEqual(Color.EMPTY)
  expect(Color.fromJson('{"label":"Red","value":"red"}')).toEqual(Color.RED)
  expect(
    Color.fromJson('{"label":"Red","value":"red","name": "rain"}')
  ).toEqual(Color.RED)
})
