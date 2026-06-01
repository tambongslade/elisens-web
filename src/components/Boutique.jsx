import Reveal from "./Reveal";
import { ParallaxImage } from "./Parallax";
import { IMAGES } from "../data";

export default function Boutique() {
  return (
    <section className="boutique" id="boutique">
      <div className="wrap boutique__grid">
        <div className="boutique__text">
          <Reveal>
            <p className="eyebrow accent">La boutique · 05</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="boutique__title">
              Prolongez le rituel <em>à la maison.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p>
              Une sélection de soins choisis par nos expertes : huiles, masques et accessoires
              doux, pensés pour respecter la nature de vos cheveux entre deux visites.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <a href="#booking" className="btn btn--dark">
              Découvrir la boutique
            </a>
          </Reveal>
        </div>
        <Reveal y={40} className="boutique__media">
          <ParallaxImage src={IMAGES.boutique} alt="Produits de soin ELI'Sens" amount={24} />
        </Reveal>
      </div>
    </section>
  );
}
