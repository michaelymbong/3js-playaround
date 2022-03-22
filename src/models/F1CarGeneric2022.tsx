import { useGLTF } from "@react-three/drei";
import { PrimitiveProps } from "@react-three/fiber";

/*"F1 2022 Generic Car" (https://skfb.ly/o8NvJ) by TheoDev is licensed under CC Attribution-NonCommercial-NoDerivs (http://creativecommons.org/licenses/by-nc-nd/4.0/).*/

export default function F1Car2022(props: PrimitiveProps) {
  const model = useGLTF("/models/f1_2022_generic_car/scene.gltf");
  return <primitive {...props} object={model.scene} />;
}
