import "../../pages/Home/Home.css";
import image from "../../assets/images/testimonial-modal.png";

const TestimonialsWin = ({ isOpen, onClose }) => {
  return (
    <div className={`testimonial-container ${isOpen ? "active" : ""}`}>
      <div className="test-modal">
        <button className="cancel" onClick={onClose}>
          <i className="ri-close-large-line"></i>
        </button>

        <img src={image} alt="document" />
      </div>
    </div>
  );
};

export default TestimonialsWin;
