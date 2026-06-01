import { motion } from "motion/react";

const variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

/** Scroll-into-view reveal with a slow, calm easing — true to the brand. */
export default function Reveal({ children, delay = 0, y = 28, as = "div", className, ...rest }) {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-12% 0px" }}
      variants={{ hidden: { opacity: 0, y }, show: { opacity: 1, y: 0 } }}
      transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

export { variants };
