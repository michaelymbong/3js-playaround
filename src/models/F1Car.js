import { useFBX } from "@react-three/drei";

export default function F1Car(props) {
  // F1 car model by Dil Afroze Ahmad
  const fbx = useFBX("/models/Ferrari_SF70H.fbx");
  return <primitive object={fbx} {...props} />;
}
