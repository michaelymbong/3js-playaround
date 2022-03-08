import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import GeishaMaskModel from "../models/GeishaMask";

export default function DynamicMaterials() {
  return (
    <Canvas>
      <ambientLight intensity={1} />
      <spotLight
        intensity={0.75}
        angle={0.1}
        penumbra={1}
        position={[10, 15, 10]}
        castShadow
      />
      <GeishaMaskModel scale={1.6} />
      <OrbitControls
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
        enableZoom={false}
        enablePan={false}
      />
    </Canvas>
  );
}
