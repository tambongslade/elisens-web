import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "motion/react";
import Reveal from "./Reveal";
import SmartImage from "./SmartImage";
import { SERVICES, IMAGES } from "../data";

function ServiceCard({ s }) {
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 150, damping: 18, mass: 0.4 });
  const sy = useSpring(my, { stiffness: 150, damping: 18, mass: 0.4 });

  // cursor position over the card → 3D tilt
  const rotateX = useTransform(sy, [-0.5, 0.5], [9, -9]);
  const rotateY = useTransform(sx, [-0.5, 0.5], [-11, 11]);
  // image counter-shifts inside the frame for inner depth
  const imgX = useTransform(sx, [-0.5, 0.5], [-12, 12]);
  const imgY = useTransform(sy, [-0.5, 0.5], [-12, 12]);

  const onMove = (e) => {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.div
      className="service-card"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      whileHover={reduce ? undefined : { y: -8 }}
      transition={{ type: "spring", stiffness: 200, damping: 22 }}
      style={{ rotateX: reduce ? 0 : rotateX, rotateY: reduce ? 0 : rotateY }}
    >
      <div className="service-card__media">
        <motion.div className="service-card__media-inner" style={{ x: reduce ? 0 : imgX, y: reduce ? 0 : imgY }}>
          <SmartImage src={IMAGES[s.img]} alt={s.title} />
        </motion.div>
        <span className="service-card__tag">{s.tag}</span>
      </div>
      <div className="service-card__body">
        <h3>{s.title}</h3>
        <p>{s.desc}</p>
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="wrap">
        <div className="services__head">
          <Reveal>
            <p className="eyebrow accent">Nos soins · 03</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="services__title">
              Des prestations pensées pour <em>protéger</em>, jamais pour abîmer.
            </h2>
          </Reveal>
        </div>

        <div className="services__grid">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.07} className="service-card-wrap">
              <ServiceCard s={s} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
