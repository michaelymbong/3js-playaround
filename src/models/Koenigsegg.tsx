import { useFBX } from "@react-three/drei";
import { PrimitiveProps } from "@react-three/fiber";

export default function Koenigsegg(props: PrimitiveProps) {
  const fbx = useFBX("/models/2792345_Koenigsegg.fbx");
  return <primitive {...props} object={fbx} />;
}
