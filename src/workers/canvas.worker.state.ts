import { State } from './types'

const context2D = Symbol('context')

export const state = <State>{
  [context2D]: null,
  get context() {
    return this[context2D]
  },
  set context(value) {
    if (!value) {
      throw new Error('Cannot set context')
    }

    this[context2D] = value
  },
  raf: 0,
  timestamp: 0,
  fps: 30,
}
