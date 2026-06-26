import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Stars, Ring } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const t = clock.getElapsedTime();
    meshRef.current.rotation.x = t * 0.08;
    meshRef.current.rotation.y = t * 0.12;
    meshRef.current.position.y = Math.sin(t * 0.5) * 0.15;
  });

  return (
    <Sphere ref={meshRef} args={[1.8, 128, 128]} position={[0, 0, 0]}>
      <MeshDistortMaterial
        color="#FF6B35"
        attach="material"
        distort={0.35}
        speed={1.5}
        roughness={0.1}
        metalness={0.9}
        emissive="#FF3300"
        emissiveIntensity={0.15}
      />
    </Sphere>
  );
}

function WireframeSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const t = clock.getElapsedTime();
    meshRef.current.rotation.x = -t * 0.05;
    meshRef.current.rotation.z = t * 0.04;
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <sphereGeometry args={[2.4, 32, 32]} />
      <meshBasicMaterial
        color="#FF6B35"
        wireframe
        transparent
        opacity={0.06}
      />
    </mesh>
  );
}

function FloatingRings() {
  const ring1 = useRef<THREE.Mesh>(null);
  const ring2 = useRef<THREE.Mesh>(null);
  const ring3 = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (ring1.current) {
      ring1.current.rotation.x = t * 0.3;
      ring1.current.rotation.y = t * 0.2;
    }
    if (ring2.current) {
      ring2.current.rotation.x = -t * 0.2;
      ring2.current.rotation.z = t * 0.25;
    }
    if (ring3.current) {
      ring3.current.rotation.y = t * 0.15;
      ring3.current.rotation.z = -t * 0.2;
    }
  });

  return (
    <>
      <Ring ref={ring1} args={[2.9, 3.05, 64]} rotation={[Math.PI / 4, 0, 0]}>
        <meshBasicMaterial color="#00D4FF" transparent opacity={0.25} side={THREE.DoubleSide} />
      </Ring>
      <Ring ref={ring2} args={[3.4, 3.5, 64]} rotation={[0, Math.PI / 3, Math.PI / 6]}>
        <meshBasicMaterial color="#FF6B35" transparent opacity={0.15} side={THREE.DoubleSide} />
      </Ring>
      <Ring ref={ring3} args={[3.9, 3.98, 64]} rotation={[Math.PI / 6, Math.PI / 4, 0]}>
        <meshBasicMaterial color="#9B59B6" transparent opacity={0.1} side={THREE.DoubleSide} />
      </Ring>
    </>
  );
}

function FloatingParticles() {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 200;

  const positions = useRef(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      const r = 4 + Math.random() * 4;
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return pos;
  }).current();

  useFrame(({ clock }) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y = clock.getElapsedTime() * 0.05;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.04} color="#00D4FF" transparent opacity={0.6} sizeAttenuation />
    </points>
  );
}

function SceneContent() {
  return (
    <>
      <Stars radius={80} depth={50} count={3000} factor={4} saturation={0} fade speed={0.5} />
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={0.8} color="#FF6B35" />
      <directionalLight position={[-10, -5, -5]} intensity={0.4} color="#00D4FF" />
      <pointLight position={[0, 0, 3]} intensity={1.5} color="#FF6B35" distance={10} />
      <AnimatedSphere />
      <WireframeSphere />
      <FloatingRings />
      <FloatingParticles />
    </>
  );
}

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (canvasRef.current) {
        const scrollY = window.scrollY;
        canvasRef.current.style.transform = `translateY(${scrollY * 0.4}px)`;
        canvasRef.current.style.opacity = String(Math.max(0, 1 - scrollY / 700));
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={canvasRef} style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
      >
        <SceneContent />
      </Canvas>
    </div>
  );
}
