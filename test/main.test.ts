import { Color } from '../src/examples/color'
import { describe } from 'node:test'
import assert from 'node:assert'

describe('Main test', () => {
  assert.equal(Color.BLUE.value, 'blue')
  assert.equal(Color.EMPTY.value, '')

  const all = Color.getAll()
  assert.equal(all.length, 3)
  assert.equal(all[1]?.label, 'Green')

  assert.equal(Color.getByKey('wrong'), Color.EMPTY)
  assert.equal(Color.getByKey('RED'), Color.RED)

  assert.equal(Color.isEmpty(Color.RED), false)
  assert.equal(Color.isEmpty(Color.EMPTY), true)

  assert.equal(Color.getByLabel('Some'), Color.EMPTY)
  assert.equal(Color.getByLabel('Blue'), Color.BLUE)

  assert.equal(Color.fromObject({}), Color.EMPTY)
  assert.equal(
    Color.fromObject({
      label: 'Blue',
    }),
    Color.EMPTY
  )
  assert.equal(
    Color.fromObject({
      label: 'Blue',
      value: 'blue2',
    }),
    Color.EMPTY
  )
  assert.equal(
    Color.fromObject({
      label: 'Blue',
      value: 'blue',
    }),
    Color.BLUE
  )
  assert.equal(
    Color.fromObject({
      label: 'Blue',
      value: 'blue',
      other: 322,
    }),
    Color.BLUE
  )
  assert.equal(Color.toJson(Color.RED), '{"label":"Red","value":"red"}')
  assert.equal(Color.fromJson('%123'), Color.EMPTY)
  assert.equal(Color.fromJson('44'), Color.EMPTY)
  assert.equal(Color.fromJson('{}'), Color.EMPTY)
  assert.equal(Color.fromJson('{"label":"Red","value":"red2"}'), Color.EMPTY)
  assert.equal(Color.fromJson('{"label":"Red","value":"red"}'), Color.RED)
  assert.equal(
    Color.fromJson('{"label":"Red","value":"red","name": "rain"}'),
    Color.RED
  )
})
