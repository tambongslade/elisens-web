import { useState } from "react";
import Reveal from "./Reveal";
import { ParallaxImage, MotifDrift } from "./Parallax";
import { IMAGES } from "../data";

export default function Booking() {
  const [sent, setSent] = useState(false);

  return (
    <section className="booking" id="booking">
      <MotifDrift className="motif-drift--booking" speed={0.5} rotate={-14} />
      <div className="wrap booking__grid">
        <div className="booking__media">
          <Reveal y={40}>
            <ParallaxImage src={IMAGES.bookingPortrait} alt="Cliente ELI'Sens" amount={28} />
          </Reveal>
          <div className="booking__info">
            <div>
              <span className="eyebrow">Le centre</span>
              <p>Yaoundé, Bastos<br />Cameroun</p>
            </div>
            <div>
              <span className="eyebrow">Contact</span>
              <p>+237 699 000 000<br />bonjour@elisens.cm</p>
            </div>
            <div>
              <span className="eyebrow">Horaires</span>
              <p>Mar — Sam<br />9h00 — 19h00</p>
            </div>
          </div>
        </div>

        <div className="booking__form-wrap">
          <Reveal>
            <p className="eyebrow accent">Rendez-vous · 06</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="booking__title">
              Offrez à vos cheveux <em>un moment.</em>
            </h2>
          </Reveal>

          {sent ? (
            <Reveal className="booking__thanks">
              <p>Merci. 🌿</p>
              <p>Votre demande est notée — nous vous recontactons très vite pour confirmer.</p>
            </Reveal>
          ) : (
            <Reveal delay={0.1} as="form" className="booking__form"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <div className="field">
                <label htmlFor="name">Nom complet</label>
                <input id="name" name="name" required placeholder="Votre nom" />
              </div>
              <div className="field field--row">
                <div>
                  <label htmlFor="phone">Téléphone</label>
                  <input id="phone" name="phone" required placeholder="+237 …" />
                </div>
                <div>
                  <label htmlFor="service">Prestation</label>
                  <select id="service" name="service" defaultValue="">
                    <option value="" disabled>Choisir…</option>
                    <option>Soin du cuir chevelu</option>
                    <option>Tresses & coiffures protectrices</option>
                    <option>Diagnostic capillaire</option>
                    <option>Espace enfant</option>
                  </select>
                </div>
              </div>
              <div className="field">
                <label htmlFor="msg">Un mot sur vos cheveux (optionnel)</label>
                <textarea id="msg" name="msg" rows="3" placeholder="Type, sensibilités, attentes…" />
              </div>
              <button type="submit" className="btn btn--violet btn--block">
                Demander mon rendez-vous
              </button>
              <p className="booking__legal">
                En envoyant ce formulaire, vous acceptez d'être recontacté·e par ELI'Sens.
                Vos données restent confidentielles.
              </p>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
