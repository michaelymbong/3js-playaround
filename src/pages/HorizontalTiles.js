import * as THREE from "three";
import { useRef, useState } from "react";
import { Image, ScrollControls, Scroll, useScroll } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { ALL_IMAGE_URLS } from "../imageUtil";

const damp = THREE.MathUtils.damp;

function Item({
  clicked,
  index,
  position,
  scale,
  totalItemCount,
  setState,
  c = new THREE.Color(),
  ...props
}) {
  const ref = useRef();
  const scroll = useScroll();
  const [hovered, hover] = useState(false);
  const click = () => setState({ clicked: index === clicked ? null : index });
  const over = () => hover(true);
  const out = () => hover(false);
  useFrame((state, delta) => {
    const y = scroll.curve(
      index / totalItemCount - 1.5 / totalItemCount,
      4 / totalItemCount
    );
    ref.current.material.scale[1] = ref.current.scale.y = damp(
      ref.current.scale.y,
      clicked === index ? 5 : 4 + y,
      8,
      delta
    );
    ref.current.material.scale[0] = ref.current.scale.x = damp(
      ref.current.scale.x,
      clicked === index ? 4.7 : scale[0],
      6,
      delta
    );
    if (clicked !== null && index < clicked)
      ref.current.position.x = damp(
        ref.current.position.x,
        position[0] - 2,
        6,
        delta
      );
    if (clicked !== null && index > clicked)
      ref.current.position.x = damp(
        ref.current.position.x,
        position[0] + 2,
        6,
        delta
      );
    if (clicked === null || clicked === index)
      ref.current.position.x = damp(
        ref.current.position.x,
        position[0],
        6,
        delta
      );
    ref.current.material.grayscale = damp(
      ref.current.material.grayscale,
      hovered || clicked === index ? 0 : Math.max(0, 1 - y),
      6,
      delta
    );
    ref.current.material.color.lerp(
      c.set(hovered || clicked === index ? "white" : "#aaa"),
      hovered ? 0.3 : 0.1
    );
  });
  return (
    <Image
      ref={ref}
      {...props}
      position={position}
      scale={scale}
      onClick={click}
      onPointerOver={over}
      onPointerOut={out}
    />
  );
}

function Items({ w = 0.7, gap = 0.15, tilesState, setState }) {
  const { width } = useThree((state) => state.viewport);
  const xW = w + gap;
  return (
    <ScrollControls
      horizontal
      damping={10}
      pages={(width - xW + ALL_IMAGE_URLS.length * xW) / width}
    >
      <Scroll>
        {ALL_IMAGE_URLS.map((url, i) => (
          <Item
            key={i}
            index={i}
            position={[i * xW, 0, 0]}
            scale={[w, 4, 1]}
            url={url}
            clicked={tilesState.clicked}
            totalItemCount={ALL_IMAGE_URLS.length}
            setState={setState}
          />
        ))}
      </Scroll>
    </ScrollControls>
  );
}

function HorizontalTiles() {
  const [tilesState, setState] = useState({
    clicked: null,
  });

  return (
    <Canvas
      gl={{ antialias: false }}
      dpr={[1, 1.5]}
      onPointerMissed={() => setState({ ...tilesState, clicked: null })}
      className="full-height"
    >
      <Items tilesState={tilesState} setState={setState} />
    </Canvas>
  );
}

export default HorizontalTiles;
