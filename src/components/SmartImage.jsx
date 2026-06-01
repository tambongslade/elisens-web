import { useState } from "react";

/**
 * Image with a graceful brand-coloured fallback.
 * If the (Unsplash placeholder) URL fails to load, we show a soft
 * gradient + the ELI'Sens motif instead of a broken image.
 */
export default function SmartImage({ src, alt = "", className = "", style }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`smart-img smart-img--fallback ${className}`}
        style={style}
        role="img"
        aria-label={alt}
      >
        <span className="smart-img__motif" aria-hidden />
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={`smart-img ${className}`}
      style={style}
      onError={() => setFailed(true)}
    />
  );
}
