import { useGLTF } from "@react-three/drei";
import { PrimitiveProps } from "@react-three/fiber";

export default function Shoe(props: PrimitiveProps) {
  const model = useGLTF("/models/shoe.glb");
  console.log("model", model);
  return <primitive {...props} object={model.scene} />;
}
