
import * as Three from 'three'; 

export default function ThreeElement() {
    
    return (
        <>
            <directionalLight position={[5, 5, 5]}/>
            <mesh rotation={
                [
                    Three.MathUtils.degToRad(45),
                    Three.MathUtils.degToRad(45),
                    0]
            }>
                <boxGeometry />
                <meshStandardMaterial color="red"/>
            </mesh>
        </>
    )
}