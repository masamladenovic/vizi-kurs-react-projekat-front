import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./css/ImageTextSection.css";

const ImageTextSection = ({ data = [] }) => {
  const rowsRef = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    const rows = rowsRef.current;
    if (!rows.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    rows.forEach((row) => {
      if (row) observer.observe(row);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="image-text-section">
      {data.map((item, index) => {
        const isReversed = index % 2 !== 0;

        return (
          <div
            key={index}
            ref={(el) => (rowsRef.current[index] = el)}
            className={`image-text-div ${isReversed ? "reversed" : ""}`}
          >
            <div className="image-div">
              <img src={item.imageSrc} alt={item.imageAlt} />
            </div>

            <div className="text-div">
              <h3>{item.title}</h3>
              <p>{item.description}</p>

              {/* Dugme se renderuje samo ako postoji u objektu */}
              {item.button && (
                <button
                  className="action-btn"
                  onClick={() => {
                    if (item.button.to) {
                      navigate(item.button.to);
                    } else if (item.button.onClick) {
                      item.button.onClick();
                    }
                  }}
                >
                  {item.button.label}
                </button>
              )}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default ImageTextSection;
