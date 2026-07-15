"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

interface CyberPointsProps {
  mouseRef: React.MutableRefObject<{ x: number; y: number }>;
}

const CyberPoints: React.FC<CyberPointsProps> = ({ mouseRef }) => {
  const masterGroupRef = useRef<THREE.Group>(null!);
  const sphereRef = useRef<THREE.Points>(null!);
  const torusRef = useRef<THREE.Points>(null!);

  // 1. Full, Complete Sphere (Fibonacci lattice) - White / Light Cyan dots forming a solid, crisp circular globe
  const spherePositions = useMemo(() => {
    const count = 6000;
    const positions = new Float32Array(count * 3);
    const phi = Math.PI * (3 - Math.sqrt(5)); // Golden angle
    const radius = 2.65;

    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count - 1)) * 2;
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = phi * i;

      positions[i * 3] = Math.cos(theta) * radiusAtY * radius;
      positions[i * 3 + 1] = y * radius;
      positions[i * 3 + 2] = Math.sin(theta) * radiusAtY * radius;
    }
    return positions;
  }, []);

  // 2. Tilted Diagonal Torus Ring - Purple / Violet dots arcing across the top-right and bottom-left exactly like reference
  const torusPositions = useMemo(() => {
    const ringCount = 3500;
    const positions = new Float32Array(ringCount * 3);
    const majorRadius = 3.3;
    const minorRadius = 0.52;

    for (let i = 0; i < ringCount; i++) {
      const u = (i / ringCount) * Math.PI * 2; // Around the major ring
      const v = ((i * 17) % ringCount) * 0.04 * Math.PI * 2; // Around the minor tube

      positions[i * 3] = (majorRadius + minorRadius * Math.cos(v)) * Math.cos(u);
      positions[i * 3 + 1] = (majorRadius + minorRadius * Math.cos(v)) * Math.sin(u) * 0.45;
      positions[i * 3 + 2] = minorRadius * Math.sin(v);
    }
    return positions;
  }, []);

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();

    // Rotate sphere smoothly on its vertical axis
    if (sphereRef.current) {
      sphereRef.current.rotation.y += delta * 0.15;
    }

    // Rotate purple torus ring along its orbital path while keeping its diagonal tilt stable
    if (torusRef.current) {
      torusRef.current.rotation.z -= delta * 0.25;
      torusRef.current.rotation.x = Math.PI / 3 + Math.sin(time * 0.25) * 0.08;
      torusRef.current.rotation.y = Math.PI / 6;
    }

    // Smooth unified mouse tilt on the master group so the sphere and purple ring tilt together smoothly without breaking the circle
    if (masterGroupRef.current) {
      const targetX = mouseRef.current.y * 0.4;
      const targetY = mouseRef.current.x * 0.4;

      masterGroupRef.current.rotation.x += (targetX - masterGroupRef.current.rotation.x) * 0.08;
      masterGroupRef.current.rotation.z += (targetY - masterGroupRef.current.rotation.z) * 0.08;
    }
  });

  return (
    <group ref={masterGroupRef}>
      {/* Core Full Circle Sphere (Bright White & Light Cyan) */}
      <Float speed={1.4} rotationIntensity={0.15} floatIntensity={0.3}>
        <Points ref={sphereRef} positions={spherePositions} stride={3}>
          <PointMaterial
            transparent
            color="#E0F2FE"
            size={0.042}
            sizeAttenuation={true}
            depthWrite={false}
            opacity={0.95}
            blending={THREE.AdditiveBlending}
          />
        </Points>
      </Float>

      {/* Tilted Purple/Violet Torus Ring (Exactly matching reference image) */}
      <Points ref={torusRef} positions={torusPositions} stride={3}>
        <PointMaterial
          transparent
          color="#C084FC"
          size={0.038}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.88}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
};

export const InteractiveCyberSphere: React.FC = () => {
  const mouseRef = useRef({ x: 0, y: 0 });

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    mouseRef.current = { x, y };
  };

  return (
    <div
      onPointerMove={handlePointerMove}
      className="w-full h-full min-h-[480px] sm:min-h-[640px] flex items-center justify-center relative select-none"
    >
      <Canvas
        camera={{ position: [0, 0, 7.5], fov: 50 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <ambientLight intensity={0.9} />
        <pointLight position={[10, 10, 10]} intensity={2.0} color="#E0F2FE" />
        <pointLight position={[-10, -10, -10]} intensity={1.8} color="#C084FC" />

        <CyberPoints mouseRef={mouseRef} />
      </Canvas>
    </div>
  );
};
