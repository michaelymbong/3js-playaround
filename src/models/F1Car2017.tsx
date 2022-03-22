import { useFBX } from "@react-three/drei";
import { PrimitiveProps } from "@react-three/fiber";

// F1 car model by Dil Afroze Ahmad

export default function F1Car(props: PrimitiveProps) {
  const fbx = useFBX("/models/Ferrari_SF70H.fbx");
  return <primitive {...props} object={fbx} />;
}
