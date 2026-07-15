"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

interface CyberPointsProps {
  count?: number;
  mouseRef: React.MutableRefObject<{ x: number; y: number }>;
}

const CyberPoints: React.FC<CyberPointsProps> = ({ count = 3600, mouseRef }) => {
  const pointsRef = useRef<THREE.Points>(null!);
  const ringRef = useRef<THREE.Points>(null!);

  // Generate spherical fibonacci / quantum particle coordinates
  const spherePositions = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const radius = 2.4;

    for (let i = 0; i < count; i++) {
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;

      positions[i * 3] = radius * Math.cos(theta) * Math.sin(phi);
      positions[i * 3 + 1] = radius * Math.sin(theta) * Math.sin(phi);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    return positions;
  }, [count]);

  // Generate orbital torus ring
  const ringPositions = useMemo(() => {
    const ringCount = 1800;
    const positions = new Float32Array(ringCount * 3);
    const majorRadius = 3.6;
    const minorRadius = 0.25;

    for (let i = 0; i < ringCount; i++) {
      const u = (i / ringCount) * Math.PI * 2;
      const v = ((i * 13) % ringCount) * 0.05 * Math.PI * 2;

      positions[i * 3] = (majorRadius + minorRadius * Math.cos(v)) * Math.cos(u);
      positions[i * 3 + 1] = (majorRadius + minorRadius * Math.cos(v)) * Math.sin(u) * 0.35;
      positions[i * 3 + 2] = minorRadius * Math.sin(v);
    }
    return positions;
  }, []);

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();

    if (pointsRef.current) {
      // Gentle autonomous rotation
      pointsRef.current.rotation.y += delta * 0.12;
      pointsRef.current.rotation.x = Math.sin(time * 0.2) * 0.15;

      // Magnetic tilt towards mouse coordinates
      const targetRotationX = mouseRef.current.y * 0.45;
      const targetRotationY = mouseRef.current.x * 0.45;

      pointsRef.current.rotation.x += (targetRotationX - pointsRef.current.rotation.x) * 0.05;
      pointsRef.current.rotation.z += (targetRotationY - pointsRef.current.rotation.z) * 0.05;
    }

    if (ringRef.current) {
      ringRef.current.rotation.z -= delta * 0.2;
      ringRef.current.rotation.x = Math.PI / 3 + Math.sin(time * 0.3) * 0.1;
    }
  });

  return (
    <group>
      {/* Central Cybernetic Particle Sphere */}
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.4}>
        <Points ref={pointsRef} positions={spherePositions} stride={3}>
          <PointMaterial
            transparent
            color="#00F2FE"
            size={0.032}
            sizeAttenuation={true}
            depthWrite={false}
            opacity={0.85}
            blending={THREE.AdditiveBlending}
          />
        </Points>
      </Float>

      {/* Outer Orbital Torus Ring */}
      <Points ref={ringRef} positions={ringPositions} stride={3}>
        <PointMaterial
          transparent
          color="#6E3AFF"
          size={0.024}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.65}
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
        camera={{ position: [0, 0, 7.2], fov: 50 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#00A8FF" />
        <pointLight position={[-10, -10, -10]} intensity={1.2} color="#6E3AFF" />

        <CyberPoints mouseRef={mouseRef} />
      </Canvas>
    </div>
  );
};
