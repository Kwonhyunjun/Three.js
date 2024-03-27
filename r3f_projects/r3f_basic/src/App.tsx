import './App.css'
import { Canvas } from '@react-three/fiber'
import ThreeElements from './ThreeElement.tsx'

function App() {

  return (
    <>
      <Canvas>
        <ThreeElements></ThreeElements>
      </Canvas>
    </>
  )
}

export default App
