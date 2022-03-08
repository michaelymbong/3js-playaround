import { useGLTF } from "@react-three/drei";

export default function Shoe(props) {
  const model = useGLTF("/models/shoe.glb");
  console.log("model", model);
  return <primitive object={model.scene} {...props} />;
}
