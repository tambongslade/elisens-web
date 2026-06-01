import { ParallaxImage, MotifDrift } from "./Parallax";
import Reveal from "./Reveal";
import { IMAGES } from "../data";

export default function Manifesto() {
  return (
    <section className="manifesto" id="manifesto">
      <MotifDrift className="motif-drift--manifesto" speed={0.5} />
      <div className="wrap manifesto__grid">
        <div className="manifesto__media">
          <Reveal y={40}>
            <ParallaxImage
              src={IMAGES.manifesto}
              alt="Texture du cheveu afro"
              className="manifesto__img"
              amount={26}
            />
          </Reveal>
          <span className="manifesto__caption">Le cheveu afro, dans toute sa richesse.</span>
        </div>

        <div className="manifesto__text">
          <Reveal>
            <p className="eyebrow accent">La maison · 01</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="manifesto__title">
              Pendant trop longtemps, le cheveu afro a rimé avec{" "}
              <em>douleur</em> et contrainte.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p>
              Chez <strong>ELI'Sens</strong>, nous en proposons une autre lecture. Une marque
              de beauté premium spécialisée dans le cheveu crépus, portée par une mission simple :
              réconcilier chacune et chacun avec sa beauté naturelle.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p>
              À travers une expérience douce, sensorielle et valorisante, le soin redevient un
              rituel — où technique et bien-être ne font qu'un, et où l'on prend soin du cheveu
              autant que de la personne.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <blockquote className="manifesto__quote">
              « À la croisée de la nature, de l'émotion et du savoir-faire. »
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
