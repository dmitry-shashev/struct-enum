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
