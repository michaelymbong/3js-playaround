import { useFBX, PresentationControls, Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

function Model(props) {
  const fbx = useFBX("/models/2792345_Koenigsegg.fbx");
  return <primitive object={fbx} {...props} />;
}

export default function SimpleModel() {
  return (
    <Canvas>
      <Sky
        distance={450000}
        sunPosition={[0, 1, 0]}
        inclination={0}
        azimuth={0.25}
      />
      <PresentationControls speed={1.5} global zoom={0.1}>
        <Model scale={0.5} position={[0, -500, 0]} />
      </PresentationControls>
    </Canvas>
  );
}
