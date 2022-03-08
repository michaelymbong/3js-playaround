import { useGLTF } from "@react-three/drei";

/* "Ghost in the Shell Geisha Mask" (https://skfb.ly/6BDTn) by naxete is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/). */

export default function GeishaMask(props) {
  const model = useGLTF("/models/gits_geisha_mask/model.glb");
  return <primitive object={model.scene} {...props} />;
}
