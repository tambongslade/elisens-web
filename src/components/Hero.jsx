import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  useMotionValue,
  useSpring,
} from "motion/react";
import SmartImage from "./SmartImage";
import { IMAGES } from "../data";

const line = {
  hidden: { opacity: 0, y: 40 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.35 + i * 0.16 },
  }),
};

export default function Hero() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  // image drifts down slowly, content lifts up and fades — layered depth
  const mediaY = useTransform(scrollYProgress, [0, 1], ["0px", "260px"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-55%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  // pointer parallax — image and headline sway with the cursor for depth
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 55, damping: 16, mass: 0.5 });
  const sy = useSpring(py, { stiffness: 55, damping: 16, mass: 0.5 });
  const mediaX = useTransform(sx, [-0.5, 0.5], [26, -26]);
  const mediaTilt = useTransform(sy, [-0.5, 0.5], [10, -10]);
  const textX = useTransform(sx, [-0.5, 0.5], [-16, 16]);

  const onMove = (e) => {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width - 0.5);
    py.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    px.set(0);
    py.set(0);
  };

  return (
    <section className="hero" id="top" ref={ref} onMouseMove={onMove} onMouseLeave={onLeave}>
      <motion.div
        className="hero__media"
        style={{ x: reduce ? 0 : mediaX, y: reduce ? 0 : mediaY }}
      >
        <motion.div className="hero__media-inner" style={{ y: reduce ? 0 : mediaTilt }}>
          <SmartImage src={IMAGES.hero} alt="Soin capillaire ELI'Sens" className="hero__img" />
        </motion.div>
        <div className="hero__veil" />
      </motion.div>

      <motion.div
        className="hero__content wrap"
        style={{ x: reduce ? 0 : textX, y: reduce ? 0 : contentY, opacity: reduce ? 1 : contentOpacity }}
      >
        <motion.p
          className="eyebrow hero__eyebrow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        >
          Centre capillaire · Yaoundé
        </motion.p>

        <h1 className="hero__title">
          <motion.span custom={0} variants={line} initial="hidden" animate="show">
            Le soin
          </motion.span>
          <motion.span custom={1} variants={line} initial="hidden" animate="show">
            qui <em>se ressent.</em>
          </motion.span>
        </h1>

        <motion.p
          className="hero__lede"
          custom={2}
          variants={line}
          initial="hidden"
          animate="show"
        >
          La beauté du cheveu afro, réconciliée avec elle-même. Un espace de soin, de
          fierté et de reconnexion à soi.
        </motion.p>

        <motion.div
          className="hero__actions"
          custom={3}
          variants={line}
          initial="hidden"
          animate="show"
        >
          <a href="#booking" className="btn btn--argile">
            Réserver un soin
          </a>
          <a href="#weight" className="btn btn--ghost">
            Le poids des mèches →
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
      >
        <span>Respirez, faites défiler</span>
        <span className="hero__scroll-line" />
      </motion.div>
    </section>
  );
}
