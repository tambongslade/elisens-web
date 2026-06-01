import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useVelocity,
  useReducedMotion,
} from "motion/react";
import SmartImage from "./SmartImage";

// momentum profile shared across the site — soft, slightly lagging = "alive"
const SPRING = { stiffness: 90, damping: 24, mass: 0.45 };

/**
 * ParallaxImage — image drifts inside a clipped frame as it crosses the
 * viewport, with spring momentum + a subtle zoom that responds to scroll
 * velocity (breathes when you fling, settles when you stop).
 */
export function ParallaxImage({ src, alt = "", className = "", amount = 16 }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const smooth = useSpring(scrollYProgress, SPRING);
  const y = useTransform(smooth, [0, 1], ["0%", `-${amount}%`]);

  // scroll-velocity → gentle zoom (V-shape: zoom on fast scroll either way)
  const velocity = useVelocity(scrollYProgress);
  const zoom = useTransform(velocity, [-1.5, 0, 1.5], [1.07, 1.0, 1.07], { clamp: true });
  const scale = useSpring(zoom, { stiffness: 140, damping: 28 });

  return (
    <div ref={ref} className={`px-frame ${className}`}>
      <motion.div
        className="px-inner"
        style={{ y: reduce ? 0 : y, scale: reduce ? 1 : scale }}
      >
        <SmartImage src={src} alt={alt} />
      </motion.div>
    </div>
  );
}

/** Generic spring-smoothed vertical drift for any content. */
export function Parallax({ children, speed = 0.15, className = "", style }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const smooth = useSpring(scrollYProgress, SPRING);
  const y = useTransform(smooth, [0, 1], [`${speed * 90}px`, `${speed * -90}px`]);

  return (
    <motion.div ref={ref} className={className} style={{ ...style, y: reduce ? 0 : y }}>
      {children}
    </motion.div>
  );
}

/** Floating brand mark that drifts + rotates on scroll, with momentum. */
export function MotifDrift({ className = "", speed = 0.4, rotate = 12 }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const smooth = useSpring(scrollYProgress, { stiffness: 50, damping: 18, mass: 0.6 });
  const y = useTransform(smooth, [0, 1], [`${speed * 150}px`, `${speed * -150}px`]);
  const r = useTransform(smooth, [0, 1], [-rotate, rotate]);

  return (
    <motion.div
      ref={ref}
      className={`motif-drift ${className}`}
      style={{ y: reduce ? 0 : y, rotate: reduce ? 0 : r }}
      aria-hidden
    />
  );
}
