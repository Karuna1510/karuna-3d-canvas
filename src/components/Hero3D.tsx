import { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial, Sphere, Text3D, OrbitControls, Float, MeshDistortMaterial, Environment } from '@react-three/drei';
import * as THREE from 'three';

function ParticleField() {
  const ref = useRef<THREE.Points>(null!);
  const { mouse } = useThree();
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(3000 * 3);
    
    for (let i = 0; i < 3000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 60;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 60;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 60;
    }
    
    return positions;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.05 + mouse.y * 0.1;
      ref.current.rotation.y = state.clock.elapsedTime * 0.075 + mouse.x * 0.1;
      
      // Pulsing effect
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.1;
      ref.current.scale.setScalar(scale);
    }
  });

  return (
    <Points ref={ref} positions={particlesPosition} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#00E5FF"
        size={0.4}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.8}
      />
    </Points>
  );
}

function InteractiveOrb() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const { mouse } = useThree();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
      
      // Follow mouse slightly
      meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, mouse.x * 2, 0.1);
      meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, mouse.y * 2, 0.1);
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={[0, 0, -8]}>
        <sphereGeometry args={[1.2, 64, 64]} />
        <MeshDistortMaterial
          color="#A855F7"
          transparent
          opacity={0.6}
          distort={0.3}
          speed={2}
          roughness={0.4}
        />
      </mesh>
    </Float>
  );
}

function GeometricShapes() {
  return (
    <>
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
        <mesh position={[-6, 3, -10]}>
          <octahedronGeometry args={[0.8]} />
          <meshStandardMaterial
            color="#F472B6"
            transparent
            opacity={0.7}
            wireframe
            emissive="#F472B6"
            emissiveIntensity={0.1}
          />
        </mesh>
      </Float>
      
      <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
        <mesh position={[6, -2, -12]}>
          <tetrahedronGeometry args={[1]} />
          <meshStandardMaterial
            color="#00E5FF"
            transparent
            opacity={0.6}
            wireframe
            emissive="#00E5FF"
            emissiveIntensity={0.1}
          />
        </mesh>
      </Float>
      
      <Float speed={1.8} rotationIntensity={0.8} floatIntensity={1.2}>
        <mesh position={[-4, -3, -15]}>
          <icosahedronGeometry args={[0.6]} />
          <meshStandardMaterial
            color="#34D399"
            transparent
            opacity={0.8}
            wireframe
            emissive="#34D399"
            emissiveIntensity={0.1}
          />
        </mesh>
      </Float>
    </>
  );
}

function FloatingGeometry() {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} position={[4, 0, -5]}>
      <dodecahedronGeometry args={[1]} />
      <meshStandardMaterial
        color="#A855F7"
        transparent
        opacity={0.7}
        wireframe
      />
    </mesh>
  );
}

function Scene() {
  return (
    <>
      <Environment preset="night" />
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#00E5FF" />
      <pointLight position={[-10, -10, -10]} intensity={0.8} color="#A855F7" />
      <spotLight
        position={[0, 20, 0]}
        angle={0.3}
        penumbra={1}
        intensity={1}
        color="#F472B6"
        castShadow
      />
      <ParticleField />
      <InteractiveOrb />
      <GeometricShapes />
      <FloatingGeometry />
    </>
  );
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 75 }}
        className="w-full h-full"
      >
        <Scene />
      </Canvas>
    </div>
  );
}