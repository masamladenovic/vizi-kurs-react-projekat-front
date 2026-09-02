import { useEffect, useRef, useState } from "react";
import "./css/MarbleSection.css";

const MarbleSection = ({
  subtitle,
  title,
  description,
  primaryButton,
  secondaryButton,
}) => {
  const marbleSectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = marbleSectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={marbleSectionRef}
      className={`marble-section ${isVisible ? "is-visible" : ""}`}
    >
      {subtitle && <h3 className="subtitle">{subtitle}</h3>}

      {title && <h2 className="title">{title}</h2>}

      {description && <p className="small-text">{description}</p>}

      {(primaryButton || secondaryButton) && (
        <div className="buttons-wrapper">
          {primaryButton && (
            <button className="discover-btn" onClick={primaryButton.onClick}>
              {primaryButton.label}
            </button>
          )}

          {secondaryButton && (
            <button className="book-btn" onClick={secondaryButton.onClick}>
              {secondaryButton.label}
            </button>
          )}
        </div>
      )}
    </section>
  );
};

export default MarbleSection;
