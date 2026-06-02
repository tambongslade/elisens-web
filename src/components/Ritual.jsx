import Reveal from "./Reveal";
import { ParallaxImage, MotifDrift } from "./Parallax";
import { RITUAL, VALUES, IMAGES } from "../data";

export default function Ritual() {
  return (
    <section className="ritual" id="ritual">
      <MotifDrift className="motif-drift--ritual" speed={0.6} rotate={18} />
      <div className="wrap">
        <div className="ritual__head">
          <Reveal>
            <p className="eyebrow accent">Le rituel · 02</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="ritual__title">
              Calme, lenteur, fluidité,<br />
              toucher, <em>respiration.</em>
            </h2>
          </Reveal>
        </div>

        <div className="ritual__steps">
          {RITUAL.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.08} className="ritual__step">
              <span className="ritual__n display">{step.n}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </Reveal>
          ))}
        </div>

        <div className="ritual__values">
          <Reveal className="ritual__values-media">
            <ParallaxImage src={IMAGES.ritual} alt="Geste de soin ELI'Sens" amount={30} />
          </Reveal>
          <ul className="ritual__values-list">
            {VALUES.map((v, i) => (
              <Reveal as="li" key={v.word} delay={i * 0.06}>
                <span className="ritual__value-word display">{v.word}</span>
                <span className="ritual__value-line">{v.line}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
