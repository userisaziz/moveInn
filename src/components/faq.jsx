import React from "react";
import "./faq.css";

const FAQ = () => {
  const faqData = [
    {
      id: 1,
      question: "Question title?",
      answer: "Anim pariatur cliche reprehenderit, enim eiusmod high life...",
    },
    {
      id: 2,
      question: "Question title?",
      answer: "Anim pariatur cliche reprehenderit, enim eiusmod high life...",
    },
    {
      id: 3,
      question: "Question title?",
      answer: "Anim pariatur cliche reprehenderit, enim eiusmod high life...",
    },
    {
      id: 4,
      question: "Question title?",
      answer: "Anim pariatur cliche reprehenderit, enim eiusmod high life...",
    },
    {
      id: 5,
      question: "Question title?",
      answer: "Anim pariatur cliche reprehenderit, enim eiusmod high life...",
    },
  ];

  return (
    <section id="faq">
      <div className="container">
        <h2 className="section-title">FAQ</h2>
        <div className="accordion" id="accordionFAQ">
          {faqData.map((faq, index) => (
            <div className="card" key={faq.id}>
              <div className="card-header" id={`heading${faq.id}`}>
                <button
                  className={`${index === 0 ? "" : "collapsed"}`}
                  type="button"
                  data-toggle="collapse"
                  data-target={`#collapse${faq.id}`}
                  aria-expanded={index === 0 ? "true" : "false"}
                  aria-controls={`collapse${faq.id}`}
                >
                  <span>{faq.question}</span>
                </button>
              </div>
              <div
                id={`collapse${faq.id}`}
                className={`collapse ${index === 0 ? "show" : ""}`}
                aria-labelledby={`heading${faq.id}`}
                data-parent="#accordionFAQ"
              >
                <div className="card-body">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
        <br />
        <div className="text-right support-text">
          <p>
            Do you have more questions?
            {/* redirect to your contact page */}
            <a href="#">Click here</a>
            and mail us.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
