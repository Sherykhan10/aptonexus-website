"use client";
import { motion, useReducedMotion } from "motion/react";
import { useSyncExternalStore } from "react";
const subscribe = (onChange: () => void) => {
  const query = window.matchMedia("(max-width: 1100px)");
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
};
const getSmallScreen = () => window.matchMedia("(max-width: 1100px)").matches;
const getServerSnapshot = () => true;
export function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const smallScreen = useSyncExternalStore(
    subscribe,
    getSmallScreen,
    getServerSnapshot,
  );
  return (
    <motion.div
      className={className}
      initial={false}
      whileInView={
        reduce
          ? undefined
          : smallScreen
            ? { opacity: [0.85, 1] }
            : { y: [14, 0], opacity: [0.65, 1] }
      }
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: smallScreen ? 0.3 : 0.55, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
