import { PayloadType, RADIUS, TWO_PI } from './canvas.worker.constants'
import { state } from './canvas.worker.state'
import type { Coordinate, Payload, Position, Velocity } from './types'

addEventListener('message', onMessage)

const dotPosition = <Position>{ x: 4, y: 4 }
const dotVelocity: Velocity = { x: 2, y: 2 }

const drawDot = ({ position: { x, y }, radius = RADIUS }: { position: Coordinate<number>; radius?: number }) => {
  state.context.beginPath()
  state.context.arc(x, y, radius, 0, TWO_PI)

  state.context.fillStyle = 'white'

  state.context.fill()
}

const draw = () => {
  clearCanvas(state.context)
  drawDot({ position: dotPosition })
}

function move() {
  moveDot()
  checkDotCollision()
}

function moveDot() {
  dotPosition.x += dotVelocity.x
  dotPosition.y += dotVelocity.y
}

function checkDotCollision() {
  const isCollidingVertically =
    dotPosition.y + RADIUS + dotVelocity.y > state.context.canvas.height || dotPosition.y - RADIUS + dotVelocity.y < 0

  const isCollidingHorizontally =
    dotPosition.x + RADIUS + dotVelocity.x > state.context.canvas.width || dotPosition.x - RADIUS + dotVelocity.x < 0

  if (isCollidingHorizontally) dotVelocity.x *= -1
  if (isCollidingVertically) dotVelocity.y *= -1
}

const eventTypeMap = <Record<PayloadType, Function>>{
  init(value: OffscreenCanvas) {
    state.context = value.getContext('2d', { alpha: false })!
  },
  start: startAnimation,
  stop: stopAnimation,
  fps: (value: number) => {
    state.fps = value
  },
}

function onMessage({ data: { value, type } }: MessageEvent<Payload>) {
  eventTypeMap[type]?.(value)
}

function clearCanvas(context: OffscreenCanvasRenderingContext2D) {
  const { width, height } = context.canvas

  context.clearRect(0, 0, width, height)
}

function startAnimation() {
  stopAnimation()

  state.raf = requestAnimationFrame(animate)
}

function stopAnimation() {
  if (!state.raf) return

  cancelAnimationFrame(state.raf)

  state.raf = 0
}

function animate(timestamp: DOMHighResTimeStamp) {
  const isFrameControlled = timestamp - state.timestamp > 1e3 * state.fps ** -1

  draw()

  if (isFrameControlled) {
    state.timestamp = timestamp

    move()
  }

  startAnimation()
}
