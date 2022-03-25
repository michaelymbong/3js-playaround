import {
  MeshReflectorMaterial,
  PresentationControls,
  Sky,
  Stage,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import F1CarModel from "../models/F1CarGeneric2022";

export default function SimpleModel() {
  return (
    <Canvas shadows camera={{ fov: 45 }}>
      <Sky
        distance={450000}
        sunPosition={[0, 1, 0]}
        inclination={0}
        azimuth={0.25}
      />
      <PresentationControls speed={1.5} global zoom={1}>
        <Stage
          contactShadow={false}
          shadows
          adjustCamera
          intensity={1}
          environment={null}
          preset="rembrandt"
        >
          <F1CarModel object={undefined} />
        </Stage>
        <mesh rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[10, 10]} />
          <MeshReflectorMaterial
            blur={[300, 100]}
            resolution={2048}
            mixBlur={1}
            mixStrength={40}
            roughness={1}
            depthScale={1.2}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            color="#FFFFFF"
            metalness={0.5}
            mirror={0}
          />
        </mesh>
      </PresentationControls>
    </Canvas>
  );
}
