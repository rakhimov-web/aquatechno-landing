import "../pages/Home/Home.css";

import contactImg from "../assets/images/contact-img.png";

const Contact = () => {
  return (
    <div>
      <section className="contact">
        <div className="row">
          {/* contact description */}
          <div className="contact-desc">
            <h3>
              Оставьте заявку на бесплатную консультацию специалиста компании
              “Акватехносервис”
            </h3>
            <img src={contactImg} alt="image" />
          </div>

          {/* contact form */}
          <div className="contact-form">
            <p>
              Наш специалист поможет подобрать моечное оборудование исходя из
              ваших предпочтений и бюджета. Ответит на все ваши вопросы и
              проконсультирует по нюансам эксплуатации моечного комплекса
            </p>
            <form>
              <div className="top-inp">
                <input type="text" placeholder="Имя" />
                <input type="tel" placeholder="Телефон" />
              </div>
              <div className="top-inp">
                <input type="email" placeholder="e-mail" />
                <input type="text" placeholder="Город" />
              </div>
              <textarea
                name="message"
                id="message"
                placeholder="Сообщение"
              ></textarea>

              <button className="btn" type="submit">
                Отправить
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
