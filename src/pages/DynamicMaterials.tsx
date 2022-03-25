import { useRef, useState } from "react";
import { Canvas, ObjectMap } from "@react-three/fiber";
import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import { HexColorPicker } from "react-colorful";

type PickerProps = {
  state: DynamicMaterialsState;
  setState: Function;
};

function Picker({ state, setState }: PickerProps) {
  const { items, current } = state;
  return (
    <div style={{ display: current ? "block" : "none" }}>
      <HexColorPicker
        className="picker"
        // @ts-ignore
        color={items[current]}
        onChange={(color) => {
          setState({
            ...state,
            items: {
              ...items,
              [current]: color,
            },
          });
        }}
      />
      <h1 className="picker-label">{current}</h1>
    </div>
  );
}

type ShoeProps = {
  state: DynamicMaterialsState;
  setState: Function;
};

function Shoe({ state, setState }: ShoeProps) {
  const { items } = state;
  const ref = useRef();
  const { nodes, materials }: ObjectMap = useGLTF("/models/shoe.glb");

  return (
    <group
      ref={ref}
      dispose={null}
      onPointerMissed={() =>
        setState({
          ...state,
          current: "",
        })
      }
      onClick={(e) => {
        e.stopPropagation();
        // @ts-ignore
        console.log("click", e.object.material.name);
        setState({
          ...state,
          // @ts-ignore
          current: e.object.material.name,
        });
      }}
    >
      <mesh
        receiveShadow
        castShadow
        // @ts-ignore
        geometry={nodes.shoe.geometry}
        material={materials.laces}
        material-color={items.laces}
      />
      <mesh
        receiveShadow
        castShadow
        // @ts-ignore
        geometry={nodes.shoe_1.geometry}
        material={materials.mesh}
        material-color={items.mesh}
      />
      <mesh
        receiveShadow
        castShadow
        // @ts-ignore
        geometry={nodes.shoe_2.geometry}
        material={materials.caps}
        material-color={items.caps}
      />
      <mesh
        receiveShadow
        castShadow
        // @ts-ignore
        geometry={nodes.shoe_3.geometry}
        material={materials.inner}
        material-color={items.inner}
      />
      <mesh
        receiveShadow
        castShadow
        // @ts-ignore
        geometry={nodes.shoe_4.geometry}
        material={materials.sole}
        material-color={items.sole}
      />
      <mesh
        receiveShadow
        castShadow
        // @ts-ignore
        geometry={nodes.shoe_5.geometry}
        material={materials.stripes}
        material-color={items.stripes}
      />
      <mesh
        receiveShadow
        castShadow
        // @ts-ignore
        geometry={nodes.shoe_6.geometry}
        material={materials.band}
        material-color={items.band}
      />
      <mesh
        receiveShadow
        castShadow
        // @ts-ignore
        geometry={nodes.shoe_7.geometry}
        material={materials.patch}
        material-color={items.patch}
      />
    </group>
  );
}

type DynamicMaterialsState = {
  current: string;
  items: {
    laces: string;
    mesh: string;
    caps: string;
    inner: string;
    sole: string;
    stripes: string;
    band: string;
    patch: string;
  };
};

export default function DynamicMaterials() {
  const [state, setState] = useState<DynamicMaterialsState>({
    current: "",
    items: {
      laces: "#ffffff",
      mesh: "#ffffff",
      caps: "#ffffff",
      inner: "#ffffff",
      sole: "#ffffff",
      stripes: "#ffffff",
      band: "#ffffff",
      patch: "#ffffff",
    },
  });

  return (
    <div className="shoe-container">
      <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
        <ambientLight intensity={1} />
        <spotLight
          intensity={0.75}
          angle={0.1}
          penumbra={1}
          position={[10, 15, 10]}
          castShadow
        />
        <Shoe state={state} setState={setState} />
        <Environment preset="city" />
        <OrbitControls
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
          enableZoom={false}
          enablePan={false}
        />
      </Canvas>
      <Picker state={state} setState={setState} />
    </div>
  );
}
