import "../pages/Home/Home.css";
import aboutImg from "../assets/images/about-img.png";

const About = () => {
  return (
    <div>
      <section className="about">
        <div className="row">
          {/* about description */}
          <div className="about-desc">
            <h2>О нас</h2>
            <p className="about-text">
              <b>ООО «Акватехносервис»</b> — официальный представитель немецкого
              концерна WashTec в Республике Беларусь и Российской Федерации и
              официальный представитель российской компании “Мой-ка!
              DS-Business”
            </p>

            <p className="about-text2">
              Также мы являемся официальным представителем российской компании
              “Cleanol” и российской компании “Агроснабтехсервис”
            </p>

            <div className="side-line-text">
              <h3>Наша миссия</h3>
              <p>
                Обеспечение компании-партнера высококлассным оборудованием.
                Экономия времени и денег клиента во время постройки бизнеса и
                при его дальнейшем функционировании за счет наших возможностей,
                знаний и опыта
              </p>
            </div>

            <div className="tick-text">
              <h3>3 направления нашей деятельности:</h3>
              <p>
                <i className="ri-check-fill"></i>
                продажа моечного оборудования для легкового и грузового
                транспорта
              </p>
              <p>
                <i className="ri-check-fill"></i>
                профессиональный монтаж моечных комплексов
              </p>
              <p>
                <i className="ri-check-fill"></i>
                техническое обслуживание автомобильных моек
              </p>
            </div>

            <p>
              Команда ООО «Акватехносервис» работает только с теми
              производителями, чье оборудование было протестировано
              специалистами компании. Мы выбираем тех, кто может гарантировать
              стабильную работу оборудования в течение всего эксплуатационного
              периода
            </p>
            <a href="#top" className="btn">
              Узнать больше
            </a>
          </div>

          {/* about image */}
          <div className="about-img">
            <img src={aboutImg} alt="image" />
          </div>
        </div>

        <hr />
      </section>
    </div>
  );
};

export default About;
