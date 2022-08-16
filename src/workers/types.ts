import { PayloadType } from './canvas.worker.constants'

export type RunType = PayloadType.Start | PayloadType.Stop

export interface Payload {
  value: OffscreenCanvas | number | undefined
  type: PayloadType
}

export interface Coordinate<T> {
  x: T
  y: T
}

export interface Position extends Coordinate<number> {}

export interface Velocity extends Coordinate<number> {}

export interface State {
  [key: symbol]: any
  context: OffscreenCanvasRenderingContext2D
  raf: number
  timestamp: number
  fps: number
}
