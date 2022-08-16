import { Canvas } from '~/components/react/Canvas'

const App = () => (
  <div className="h-full grid gap-4 place-items-center">
    <h2 className="text-xl font-bold">React 18</h2>
    <Canvas width={400} height={225} />
  </div>
)

export default App
