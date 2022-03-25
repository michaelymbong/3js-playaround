import * as THREE from "three";
import { useRef } from "react";
import { Canvas, useFrame, useThree, Vector3 } from "@react-three/fiber";
import { useIntersect, Image, ScrollControls, Scroll } from "@react-three/drei";
import { ALL_IMAGE_URLS } from "../imageUtil";
import { Mesh } from "three";

type ItemProps = {
  url: string;
  scale: Vector3;
  position: Vector3;
};

function Item({ url, scale, position }: ItemProps) {
  const visible = useRef(false);
  const ref = useIntersect<Mesh>((isVisible) => (visible.current = isVisible));
  const { height } = useThree((state) => state.viewport);
  useFrame((state, delta) => {
    ref.current.position.y = THREE.MathUtils.damp(
      ref.current.position.y,
      visible.current ? 0 : -height / 2 + 1,
      4,
      delta
    );
    // @ts-ignore
    THREE.MathUtils.damp(
      // @ts-ignore
      ref.current.material.zoom,
      visible.current ? 1 : 1.5,
      4,
      delta
    );
  });
  return (
    <group position={position}>
      {/* @ts-ignore */}
      <Image ref={ref} scale={scale} url={url} />
    </group>
  );
}

function Items() {
  const { width: w, height: h } = useThree((state) => state.viewport);
  return (
    <Scroll>
      <Item
        url={ALL_IMAGE_URLS[0]}
        scale={[w / 2.4, w / 2.4, 1]}
        position={[-w / 6, 0, 0]}
      />
      <Item
        url={ALL_IMAGE_URLS[1]}
        scale={[2, w / 3, 1]}
        position={[w / 30, -h, 0]}
      />
      <Item
        url={ALL_IMAGE_URLS[2]}
        scale={[w / 3, w / 5, 1]}
        position={[-w / 4, -h * 1, 0]}
      />
      <Item
        url={ALL_IMAGE_URLS[3]}
        scale={[w / 5, w / 5, 1]}
        position={[w / 4, -h * 1.2, 0]}
      />
      <Item
        url={ALL_IMAGE_URLS[4]}
        scale={[w / 5, w / 5, 1]}
        position={[w / 10, -h * 1.75, 0]}
      />
      <Item
        url={ALL_IMAGE_URLS[5]}
        scale={[w / 3, w / 3, 1]}
        position={[-w / 4, -h * 2, 0]}
      />
      <Item
        url={ALL_IMAGE_URLS[6]}
        scale={[w / 3, w / 5, 1]}
        position={[-w / 4, -h * 2.6, 0]}
      />
      <Item
        url={ALL_IMAGE_URLS[7]}
        scale={[w / 2, w / 2, 1]}
        position={[w / 4, -h * 3.1, 0]}
      />
      <Item
        url={ALL_IMAGE_URLS[8]}
        scale={[w / 2.5, w / 2, 1]}
        position={[-w / 6, -h * 4.1, 0]}
      />
    </Scroll>
  );
}

function VerticalTiles() {
  return (
    <Canvas
      orthographic
      camera={{ zoom: 80 }}
      gl={{ alpha: false, antialias: false, stencil: false, depth: false }}
      dpr={[1, 1.5]}
    >
      <ScrollControls damping={6} pages={5}>
        <Items />
        {/* @ts-ignore */}
        <Scroll html style={{ width: "100%" }}>
          <h1
            style={{
              position: "absolute",
              top: `120vh`,
              right: "20vw",
              fontSize: "20em",
              transform: `translate3d(0,-100%,0)`,
            }}
          >
            loh
          </h1>
          <h1 style={{ position: "absolute", top: "180vh", left: "10vw" }}>
            wrong
          </h1>
          <h1
            style={{
              position: "absolute",
              top: "260vh",
              right: "10vw",
              fontSize: "12em",
            }}
          >
            what?
          </h1>
          <h1
            style={{
              position: "absolute",
              top: "350vh",
              left: "10vw",
              fontSize: "25em",
            }}
          >
            is
          </h1>
          <h1 style={{ position: "absolute", top: "450vh", right: "10vw" }}>
            our
            <br />
            truth
          </h1>
        </Scroll>
      </ScrollControls>
    </Canvas>
  );
}

export default VerticalTiles;
