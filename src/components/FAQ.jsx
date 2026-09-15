import { useState } from "react";
import "./css/FAQ.css";

const FAQ = ({ items = [], linen }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={`faq-section ${linen ? "faq-section--linen" : ""}`}>
      <div className="faq-section__intro">
        <span className="faq-section__eyebrow">FREQUENTLY ASKED QUESTIONS</span>

        <h2>
          Before you
          <br />
          arrive.
        </h2>

        <p>A few things worth knowing before your stay at Maison Éloi.</p>
      </div>

      <div className="faq-section__list">
        {items.map((item, index) => {
          const isActive = activeIndex === index;

          return (
            <div
              key={index}
              className={`faq-item ${isActive ? "is-active" : ""}`}
            >
              <button
                className="faq-item__question"
                onClick={() => toggleQuestion(index)}
                aria-expanded={isActive}
              >
                <span className="faq-item__number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="faq-item__title">{item.question}</span>

                <span className="faq-item__icon">
                  <span></span>
                  <span></span>
                </span>
              </button>

              <div className={`faq-item__answer ${isActive ? "is-open" : ""}`}>
                <div className="faq-item__answer-inner">
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;
