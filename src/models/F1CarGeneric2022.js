import { useGLTF } from "@react-three/drei";

/*"F1 2022 Generic Car" (https://skfb.ly/o8NvJ) by TheoDev is licensed under CC Attribution-NonCommercial-NoDerivs (http://creativecommons.org/licenses/by-nc-nd/4.0/).*/

export default function F1Car2022(props) {
  const model = useGLTF("/models/f1_2022_generic_car/scene.gltf");
  console.log(model);

  return <primitive object={model.scene} {...props} />;
}
