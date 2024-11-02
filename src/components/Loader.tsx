import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Loader = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen overflow-hidden bg-main-background-light dark:bg-main-background-dark">
      <div className="relative w-64 h-64">
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{
            rotateY: mousePosition.x / 20,
            rotateX: -mousePosition.y / 20,
          }}
          transition={{ type: "spring", stiffness: 75, damping: 15 }}
        >
          <motion.div
            className="text-6xl font-bold text-primary-color-light dark:text-primary-color-dark"
            animate={{
              scale: [1, 1.1, 1],
              textShadow: [
                "0 0 5px rgba(139, 92, 246, 0.5)",
                "0 0 20px rgba(139, 92, 246, 0.8)",
                "0 0 5px rgba(139, 92, 246, 0.5)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            DB
          </motion.div>
        </motion.div>

        {[...Array(20)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute w-2 h-2 rounded-full bg-primary-color-light dark:bg-primary-color-dark"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
            }}
            transition={{
              duration: Math.random() * 2 + 1,
              repeat: Infinity,
              repeatType: "reverse",
              delay: Math.random() * 2,
            }}
          />
        ))}

        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(139,92,246,0.2) 0%, rgba(139,92,246,0) 70%)",
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.7, 0.3, 0.7],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />

        {[...Array(3)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute inset-0 border-2 border-primary-color-light dark:border-primary-color-dark rounded-full"
            style={{ borderRadius: "50%" }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [1, 0, 1],
              rotate: [0, 360],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: index * 0.4,
            }}
          />
        ))}
      </div>
    </div>
  );
};
export default Loader;
