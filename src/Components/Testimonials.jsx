import React, { useState, useEffect } from "react";
import "../pages/Home/Home.css";
import TestimonialsWin from "../Components/Modals/TestimonialsWin";

const Testimonials = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  return (
    <div>
      <section className="testimonials">
        <div className="row">
          <h2>Отзывы наших клиентов</h2>
          <p>Тот приятный момент, когда клиент благодарен</p>

          <div className="testimonial-cards">
            <div className="testimonial-card">
              <button onClick={() => setIsModalOpen(true)}>
                <i className="ri-add-large-fill"></i>
              </button>
            </div>

            <div className="testimonial-card">
              <button onClick={() => setIsModalOpen(true)}>
                <i className="ri-add-large-fill"></i>
              </button>
            </div>

            <div className="testimonial-card">
              <button onClick={() => setIsModalOpen(true)}>
                <i className="ri-add-large-fill"></i>
              </button>
            </div>

            <div className="testimonial-card">
              <button onClick={() => setIsModalOpen(true)}>
                <i className="ri-add-large-fill"></i>
              </button>
            </div>

            <div className="testimonial-card">
              <button onClick={() => setIsModalOpen(true)}>
                <i className="ri-add-large-fill"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      <TestimonialsWin
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Testimonials;
