import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";

export const FAQ3DPanel = ({ children }) => (
  <Canvas className="w-full bg-gray-100 rounded-2xl" style={{height: "700px"}}>
    <ambientLight intensity={0.5} />
    <directionalLight position={[2, 5, 2]} />
    <OrbitControls />
    <Html center>
      <div className="w-[80vw] max-w-2xl">
        {children}
      </div>
    </Html>
  </Canvas>
);