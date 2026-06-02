import "../pages/Home/Home.css";

import logo from "../assets/icons/logo-footer.svg";
import footerIcon1 from "../assets/icons/footer-icon1.svg";
import footerIcon2 from "../assets/icons/footer-icon2.svg";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="row">
          {/* footer top */}
          <div className="footer-top">
            <a className="footer-logo" href="#top">
              <img src={logo} alt="logo" />
            </a>

            <div className="footer-tel">
              <div className="tel-num">
                <a href="#top">
                  <img src={footerIcon1} alt="icon" />
                  +375 29 365-80-70
                </a>
                <a href="#top">
                  <img src={footerIcon2} alt="icon" />
                  +375 33 365-80-70
                </a>
              </div>
              <p>
                220012, Республика Беларусь, г. Минск, ул. Толбухина 2а, к. 320
              </p>
            </div>

            <div className="footer-email">
              <a href="#top">sales@aqts.by</a>
              <p>Пн-Пт с 9:00 до 18:00</p>
            </div>
          </div>

          <hr />

          {/* footer main link */}
          <div className="footer-main">
            {/* footer card */}
            <div className="footer-card">
              <h3>Оборудование</h3>
              <div className="footer-text">
                <p>Мойки самообслуживания для легковых автомобилей</p>
                <p>Мойки самообслуживания для грузовых автомобилей</p>
                <p>Портальные мойки для грузовых автомобилей</p>
                <p>Портальные мойки для легковых автомобилей</p>
                <p>Робот-мойка для легковых автомобилей</p>
                <p>Туннельные мойки для легковых автомобилей</p>
                <p>Система оборотного водоснабжения</p>
              </div>
            </div>

            {/* footer card */}
            <div className="footer-card">
              <h3>Дополнительное оборудование</h3>
              <div className="footer-text">
                <p>
                  Пылесос для туннельных, портальных моек и моек
                  самообслуживания
                </p>
                <p>Автохимия</p>
                <p>Запчасти и комплектующие</p>
              </div>

              <h3 className="footer-padding">Сервис</h3>
              <div className="footer-text">
                <p>Монтаж автомоечного оборудования</p>
                <p>Обслуживание автомойки</p>
                <p>Ремонт автомоечного оборудования</p>
              </div>
            </div>

            {/* footer card */}
            <div className="footer-card">
              <h3>Дополнительное оборудование</h3>
              <div className="footer-link">
                <a href="#top">О компании WashTec</a>
                <a href="#top">О компании Мой-ка! DS-Business</a>
                <a href="#top">О компании ООО “Акватехносервис”</a>
                <a href="#top">Реализованные проекты</a>
                <a href="#top">Отзывы</a>
                <a href="#top">Сертификаты</a>
                <a href="#top">Вопрос-ответ</a>
                <a href="#top">Контакты</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
