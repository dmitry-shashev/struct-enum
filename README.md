## Description

The main idea - to provide a convenient way of manipulating
constant object types with the main general functionality and
predefined constant structure.

It allows parsing by a key or field value, instead of using
`undefined` or `null` - it uses `Empty` variant

## Installing

For `npm`

```bash
npm install struct-enum
```

For `pnpm`

```bash
pnpm add struct-enum
```

## Example of using

```bash
import { StructEnum } from '../constants/struct-enum'

export interface ColorValue {
  label: string
  value: string
}

class Color extends StructEnum<Color, ColorValue> {
  EMPTY = this.buildValue({
    label: '',
    value: '',
  })

  RED = this.buildValue({
    label: 'Red',
    value: 'red',
  })

  GREEN = this.buildValue({
    label: 'Green',
    value: 'green',
  })

  BLUE = this.buildValue({
    label: 'Blue',
    value: 'blue',
  })

  // example how we can get own sets
  getOnlyNeeded(): ReadonlyArray<ColorValue> {
    return [this.GREEN, this.BLUE]
  }

  // example how we can get a value by a field
  getByLabel(value: ColorValue['label']): ColorValue {
    return this.getByFieldValue('label', value)
  }
}

const obj: Readonly<Color> = new Color()
export { obj as Color }
```

Then in code we may use them like

```bash
const p: ColorValue = Color.BLUE
const byLabel = Color.getByLabel('Green')
const allPossible = Color.getAll()
const some = Color.getByKey('RED')
```

May parse by a key and if there is no value - returns `empty` variant
(`Color.Empty`)

```bash
const wrongVariant = Color.getByKey('some')
console.log('Is empty: ', Color.isEmpty(wrongVariant))
```
