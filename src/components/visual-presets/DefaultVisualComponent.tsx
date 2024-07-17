import { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import {
  RenderTexture,
  OrbitControls,
  PerspectiveCamera,
  Text,
  ContactShadows,
} from "@react-three/drei";

function DefaultVisualComponent() {
  return (
    <div id="default-visual-wrapper">
      <Canvas camera={{ position: [5, 5, 5], fov: 25 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} />
        <Cube />
        <ContactShadows
          frames={1}
          position={[0, -0.5, 0]}
          blur={1}
          opacity={0.75}
        />
        <ContactShadows
          frames={1}
          position={[0, -0.5, 0]}
          blur={3}
          color="red"
        />
        <OrbitControls minPolarAngle={0} maxPolarAngle={Math.PI / 2.1} />
      </Canvas>
    </div>
  );
}

function Cube() {
  const textRef = useRef("");
  // useFrame(
  //   (state) =>
  //     (textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2)
  // );
  return (
    <mesh>
      <boxGeometry />
      <meshStandardMaterial>
        <RenderTexture attach="map" anisotropy={16}>
          <PerspectiveCamera
            makeDefault
            manual
            aspect={1 / 1}
            position={[0, 0, 5]}
          />
          <color attach="background" args={["blue"]} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} />
          <Text ref={textRef} fontSize={2} color="white">
            WIP
          </Text>
        </RenderTexture>
      </meshStandardMaterial>
    </mesh>
  );
}

export default DefaultVisualComponent;
