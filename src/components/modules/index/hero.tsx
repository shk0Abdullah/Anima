"use client";

// Ring.tsx
import { twMerge } from "tailwind-merge";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";

type RingProps = {
  borderClass: string;
  wireColor?: string;
  geo?: "sphere" | "torus" | "knot";
};

const geoMap = {
  sphere: new THREE.SphereGeometry(1, 20, 16),
  torus: new THREE.TorusGeometry(1, 0.35, 16, 100),
  knot: new THREE.CylinderGeometry(0.8, 0.8, 1, 64),
};

export const Ring = ({
  borderClass,
  wireColor = "#4F46E5",
  geo = "sphere",
}: RingProps) => {
  const isTorus = geo === "torus";
  const isSphere = geo === "sphere";

  return (
    <div
      className={twMerge(
        "relative flex items-center justify-center w-52 h-32 border-4 rounded-2xl overflow-hidden",
        borderClass
      )}
    >
      <Canvas camera={{ position: [0, 0, 4], fov: 35 }}>
        <mesh
          geometry={
            geo === "sphere"
              ? geoMap.sphere
              : geo === "torus"
              ? geoMap.torus
              : geoMap.knot
          }
          rotation={
            isTorus
              ? [Math.PI / 2, 0.4, 0] // flat torus
              : isSphere
              ? [Math.PI / 1.3, 0.2, 0] // pole-facing sphere
              : [0, 0, 0] // box unchanged
          }
        >
          <meshStandardMaterial
            roughness={0.3}
            metalness={0.8}
            wireframe
            color={wireColor}
          />
        </mesh>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />

        {/* NO OrbitControls → non-interactive */}
      </Canvas>
    </div>
  );
};

export default function Hero() {
  return (
    <section className="grid place-content-center min-h-screen bg-gradient-to-br from-white via-[#96969b] to-white text-black px-6 text-center">
      {/* your EXACT block, zero changes */}
      <div className="space-y-10">
        <h1 className="flex items-center translate-x-20 justify-center gap-6 text-7xl font-semibold">
          Control{" "}
          <Ring
            borderClass="border-[#103B1B]"
            geo="sphere"
            wireColor="#103B1B"
          />
          Your
        </h1>

        <h2 className="flex items-center -translate-x-30 gap-6 text-7xl font-semibold">
          Mind{" "}
          <Ring
            borderClass="border-[#6774D8]"
            geo="torus"
            wireColor="#6774D8"
          />
          <span className="italic font-light">Manifest</span>
        </h2>

        <h3 className="flex items-center translate-x-20 justify-center gap-6 text-7xl font-semibold">
          Your{" "}
          <Ring borderClass="border-[#14103B]" geo="knot" wireColor="#6c63ff" />
          Reality
        </h3>
      </div>
    </section>
  );
}
