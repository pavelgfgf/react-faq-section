import { Canvas } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";

export const FAQ3DPanel = ({ children }) => (
  <div className= "max-h-[700px] overflow-y-auto px-6 ml-55">
    <div className="mx-auto max-w-7xlsm:grid-cols-2 lg:grid-cols-3 gap-10">
      {children}
    </div>
  </div>
);