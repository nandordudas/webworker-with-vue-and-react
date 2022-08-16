import type { RunType } from '~/workers/types'
import CanvasWorker from '~/workers/canvas.worker?worker'
import { PayloadType } from '~/workers/canvas.worker.constants'
import { useWorker } from '~/composables/useWorker'

interface CanvasProperties {
  width?: number
  height?: number
}

export const Canvas = ({ width = 800, height = 450 }: CanvasProperties) => {
  const { isSupported, post, terminate } = useWorker(new CanvasWorker())
  const [fps, setFps] = useState(30)

  const canvasElementRef = useCallback((value: HTMLCanvasElement) => {
    const canvas = value?.transferControlToOffscreen()

    if (!canvas) {
      throw new Error('Canvas cannot be transferred')
    }

    post({ type: 'init', value: canvas }, [canvas])
    post({ type: 'start' })
  }, [])

  const onChangeFps = useCallback(({ target: { value, valueAsNumber } }: React.ChangeEvent<HTMLInputElement>) => {
    setFps(valueAsNumber)
    post({ type: 'fps', value })
  }, [])

  const run = useCallback((type: RunType) => post({ type }), [])
  const start = () => run(PayloadType.Start)
  const stop = () => run(PayloadType.Stop)

  useEffect(() => terminate, [])

  if (!isSupported) {
    return <div>Webworker and OffscreenCanvas not suported</div>
  }

  return (
    <div>
      <div className="flex gap-4 flex-col">
        <span className="text-center">fps: {fps}</span>
        <input type="range" min="1" max="60" value={fps} onChange={onChangeFps} />
      </div>
      <canvas width={width} height={height} ref={canvasElementRef} className="rounded my-4" />
      <div className="flex gap-4 justify-center">
        <button className="btn-teal" onClick={start}>
          Start
        </button>
        <button className="btn-amber" onClick={stop}>
          Stop
        </button>
      </div>
    </div>
  )
}
