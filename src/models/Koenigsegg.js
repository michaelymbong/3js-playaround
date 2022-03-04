import { useFBX } from "@react-three/drei";

export default function Koenigsegg(props) {
  const fbx = useFBX("/models/2792345_Koenigsegg.fbx");
  return <primitive object={fbx} {...props} />;
}
