import { useFBX } from "@react-three/drei";

// F1 car model by Dil Afroze Ahmad

export default function F1Car(props) {
  const fbx = useFBX("/models/Ferrari_SF70H.fbx");
  return <primitive object={fbx} {...props} />;
}
