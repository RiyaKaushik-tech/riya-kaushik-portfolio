"use client"
import { useRef, useMemo, Suspense } from "react";
import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, MeshWobbleMaterial, Torus, Sphere } from "@react-three/drei";
import { User, Code2, Layers, Compass } from "lucide-react";
import * as THREE from "three";

/* ─── 3D Scene Components ─── */

function GlowingSphere() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    ref.current.rotation.x = state.clock.elapsedTime * 0.15;
    ref.current.rotation.y = state.clock.elapsedTime * 0.2;
  });
  return (
    <Float speed={2} rotationIntensity={0.4} floatIntensity={1.2}>
      <Sphere ref={ref} args={[1, 64, 64]} position={[0, 0, 0]}>
        <MeshDistortMaterial
          color="#06b6d4"
          emissive="#06b6d4"
          emissiveIntensity={0.3}
          roughness={0.2}
          metalness={0.8}
          distort={0.35}
          speed={1.5}
          transparent
          opacity={0.85}
        />
      </Sphere>
    </Float>
  );
}

function FloatingTorus() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    ref.current.rotation.x = state.clock.elapsedTime * 0.3;
    ref.current.rotation.z = state.clock.elapsedTime * 0.15;
  });
  return (
    <Float speed={1.5} rotationIntensity={0.6} floatIntensity={0.8}>
      <Torus ref={ref} args={[1.6, 0.35, 32, 64]} position={[0, 0, -1]}>
        <MeshWobbleMaterial
          color="#a855f7"
          emissive="#7c3aed"
          emissiveIntensity={0.2}
          roughness={0.3}
          metalness={0.7}
          factor={0.3}
          speed={1}
          transparent
          opacity={0.7}
        />
      </Torus>
    </Float>
  );
}

function OrbitingParticles() {
  const ref = useRef<THREE.Points>(null);
  const count = 80;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const radius = 2.2 + Math.random() * 0.6;
      pos[i * 3] = Math.cos(angle) * radius;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 1.5;
      pos[i * 3 + 2] = Math.sin(angle) * radius;
    }
    return pos;
  }, []);

  useFrame((state) => {
    ref.current.rotation.y = state.clock.elapsedTime * 0.08;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.2;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.04} color="#06b6d4" transparent opacity={0.6} sizeAttenuation />
    </points>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={0.8} color="#06b6d4" />
      <pointLight position={[-5, -3, 3]} intensity={0.4} color="#a855f7" />
      <GlowingSphere />
      <FloatingTorus />
      <OrbitingParticles />
    </>
  );
}

/* ─── About Data ─── */

const aboutStory = [
  {
    title: "Who I Am",
    description:
      "A full-stack developer who enjoys turning complex ideas into clear, useful digital experiences with a strong focus on quality and user satisfaction.",
    icon: <User className="h-5 w-5" />,
  },
  {
    title: "What I Build",
    description:
      "Modern web applications with React, Next.js, APIs, and scalable backend systems that are practical and built for real business needs.",
    icon: <Code2 className="h-5 w-5" />,
  },
  {
    title: "How I Build",
    description:
      "Through clean architecture, reusable components, thoughtful UI/UX, and performance-minded engineering from day one.",
    icon: <Layers className="h-5 w-5" />,
  },
  {
    title: "Where I'm Heading",
    description:
      "Toward building larger, high-impact products and growing into a developer who leads with both technical depth and product vision.",
    icon: <Compass className="h-5 w-5" />,
  },
];

/* ─── Main Page ─── */

const About = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background py-20 sm:py-28">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute -left-[5%] top-[8%] h-[280px] w-[280px] rounded-full blur-[100px]"
          style={{ background: "radial-gradient(circle, hsl(var(--glow-cyan) / 0.15), transparent 70%)" }}
          animate={{ y: [0, -15, 0], scale: [1, 1.06, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[15%] right-[-3%] h-[220px] w-[220px] rounded-full blur-[80px]"
          style={{ background: "radial-gradient(circle, hsl(var(--glow-purple) / 0.12), transparent 70%)" }}
          animate={{ y: [0, 12, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 10, delay: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* 3D Canvas — right side on large screens, behind content on small */}
      <div className="pointer-events-none absolute inset-0 lg:left-[45%] lg:right-0 lg:top-0 lg:bottom-0">
        <div className="h-full w-full opacity-70 lg:opacity-100">
          <Suspense fallback={null}>
            <Canvax camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 1.5]}>
              <Scene />
            </Canvas>
          </Suspense>
        </div>
      </div>

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground">
            About
          </p>
          <h1 className="mt-4 text-4xl font-light leading-tight sm:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Professional. Calm. Focused.
            </span>
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            A quick look at what I do, how I approach my work, and where I'm
            heading as a developer — built on clarity, consistency, and care.
          </motion.p>
        </motion.div>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          className="my-12 h-px max-w-xs origin-left bg-gradient-to-r from-primary/40 to-transparent"
        />

        {/* Cards grid */}
        <div className="grid gap-5 sm:grid-cols-2">
          {aboutStory.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="group relative rounded-2xl border border-border bg-card/60 p-6 backdrop-blur-md transition-colors duration-300 hover:border-primary/30"
            >
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  boxShadow:
                    "inset 0 1px 0 0 hsl(var(--primary) / 0.1), 0 0 40px -10px hsl(var(--primary) / 0.15)",
                }}
              />
              <div className="relative">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary/20">
                    {item.icon}
                  </div>
                  <span className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="text-lg font-medium text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Status indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 flex items-center gap-4"
        >
          <motion.div
            className="h-2 w-2 rounded-full bg-primary"
            animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <p className="text-sm text-muted-foreground">
            Currently open to new opportunities and collaborations.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
