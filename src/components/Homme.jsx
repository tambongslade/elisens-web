import { ParallaxImage } from "./Parallax";
import Reveal from "./Reveal";
import { HOMME, IMAGES } from "../data";

export default function Homme() {
  return (
    <section className="homme" id="homme">
      <div className="wrap homme__grid">
        <div className="homme__intro">
          <Reveal>
            <p className="eyebrow accent">{HOMME.eyebrow}</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="homme__title">{HOMME.title}</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="homme__lead">{HOMME.lead}</p>
          </Reveal>
        </div>

        <div className="homme__gallery">
          {HOMME.gallery.map((g, i) => (
            <Reveal
              key={g.key}
              delay={i * 0.07}
              className={`homme__cell${g.feature ? " homme__cell--feature" : ""}`}
            >
              <ParallaxImage src={IMAGES[g.key]} alt={g.alt} amount={18} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
