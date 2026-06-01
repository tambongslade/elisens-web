import { useMemo, useState } from "react";
import { motion } from "motion/react";
import Reveal from "./Reveal";
import { WEIGHT_REFS, DENSITY } from "../data";

const MIN = 0.2;
const MAX = 2.5;

export default function WeightCalculator() {
  const [weight, setWeight] = useState(1.2);
  const [density, setDensity] = useState(DENSITY[1]);

  const ref = useMemo(
    () => WEIGHT_REFS.find((r) => weight <= r.max) ?? WEIGHT_REFS[WEIGHT_REFS.length - 1],
    [weight]
  );

  // comfort / vigilance / risk zones relative to the chosen density
  const status = useMemo(() => {
    const t = density.threshold;
    if (weight <= t) return { key: "confort", label: "Zone de confort", color: "var(--eucalyptus)" };
    if (weight <= t * 1.4)
      return { key: "vigilance", label: "Vigilance", color: "var(--rose-deep)" };
    return { key: "risque", label: "Risque — alopécie de traction", color: "var(--violet-soft)" };
  }, [weight, density]);

  const pct = ((weight - MIN) / (MAX - MIN)) * 100;

  const message = {
    confort:
      "Votre cuir chevelu respire. Cette charge reste douce pour vos racines et vos tempes.",
    vigilance:
      "Charge à surveiller. Sur la durée, pensez à alléger et à espacer les coiffures serrées.",
    risque:
      "Charge trop lourde pour cette densité. Tension excessive : risque de chute et d'irritation des tempes.",
  }[status.key];

  return (
    <section className="weight" id="weight">
      <div className="wrap">
        <div className="weight__head">
          <Reveal>
            <p className="eyebrow accent">Le poids des mèches · 04</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="weight__title">
              Et si vos mèches pesaient<br /> le poids d'une <em>pastèque&nbsp;?</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="weight__intro">
              On sous-estime souvent ce que nos coiffures font porter au cuir chevelu. Faites
              glisser le curseur : ELI'Sens traduit le poids en objets du quotidien, pour mieux
              prendre soin de vos racines.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="weight__panel">
          <div className="weight__visual">
            <motion.span
              key={ref.emoji}
              className="weight__emoji"
              initial={{ scale: 0.6, opacity: 0, rotate: -8 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 220, damping: 16 }}
            >
              {ref.emoji}
            </motion.span>
            <div className="weight__readout">
              <span className="weight__kg display">{weight.toFixed(1)}</span>
              <span className="weight__unit">kg</span>
            </div>
            <p className="weight__equals">
              c'est environ <strong>{ref.object}</strong>
            </p>
          </div>

          <div className="weight__controls">
            <label className="weight__label" htmlFor="weight-range">
              Poids estimé des mèches
            </label>
            <input
              id="weight-range"
              type="range"
              min={MIN}
              max={MAX}
              step={0.05}
              value={weight}
              onChange={(e) => setWeight(parseFloat(e.target.value))}
              style={{
                background: `linear-gradient(90deg, var(--rose) ${pct}%, rgba(243,239,233,0.18) ${pct}%)`,
              }}
            />
            <div className="weight__scale">
              <span>{MIN} kg</span>
              <span>{MAX} kg</span>
            </div>

            <p className="weight__label weight__label--mt">Densité capillaire</p>
            <div className="weight__density">
              {DENSITY.map((d) => (
                <button
                  key={d.key}
                  className={`weight__chip ${density.key === d.key ? "is-active" : ""}`}
                  onClick={() => setDensity(d)}
                >
                  {d.label}
                </button>
              ))}
            </div>

            <div className="weight__status" style={{ "--st": status.color }}>
              <span className="weight__status-dot" />
              <div>
                <strong>{status.label}</strong>
                <p>{message}</p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <p className="weight__foot">
            Outil pédagogique. Chaque chevelure est unique — nos expertes établissent un
            diagnostic personnalisé en centre.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
