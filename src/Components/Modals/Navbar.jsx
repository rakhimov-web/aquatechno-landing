import "../../pages/Home/Home.css";
import productImg1 from "../../assets/images/navbaar-img1.png";
import productImg2 from "../../assets/images/navbar-img2.png";
import productImg3 from "../../assets/images/navbar-img3.png";
import productImg4 from "../../assets/images/navbar-img4.png";
import productImg5 from "../../assets/images/navbar-img5.png";
import productImg6 from "../../assets/images/navbar-img6.png";
import productImg7 from "../../assets/images/navbar-img7.png";

const Navbar = ({ isOpen }) => {
  return (
    <div className={`navbar ${isOpen ? "active" : ""}`}>
      <div className="nav-card1">
        <h3>Оборудование</h3>
        <div className="nav-text">
          <p>Мойки самообслуживания для легковых автомобилей</p>
          <p>Мойки самообслуживания для грузовых автомобилей</p>
          <p>Портальные мойки для легковых автомобилей</p>
          <p>Портальные мойки для грузовых автомобилей</p>
          <p>Робот-мойки для легковых автомобилей</p>
          <p>Туннельные мойки для легковых автомобилей</p>
        </div>

        <div className="nav-card1 nav-top">
          <h3>Дополнительное оборудование</h3>
          <div className="nav-text">
            <p>Система оборотного водоснабжения</p>
            <p>Пылесос самообслуживания</p>
            <p>Автохимия</p>
            <p>Запчасти и комплектующие</p>
          </div>
        </div>

        <div className="nav-card1 nav-top">
          <h3>Сервис</h3>
          <div className="nav-text">
            <p>Монтаж автомоечного оборудования</p>
            <p>Обслуживание автомойки</p>
            <p>Ремонт автомоечного оборудования</p>
          </div>
        </div>
      </div>

      <div className="nav-card2">
        <h3>Портальные мойки для легковых автомобилей</h3>
        <div className="nav-products">
          <a href="#top">
            <div className="product-link">
              <img src={productImg1} alt="product" />
              <p>SoftCare² Pro</p>
            </div>
          </a>
          <a href="#top">
            <div className="product-link">
              <img src={productImg2} alt="product" />
              <p>EasyWash</p>
            </div>
          </a>
          <a href="#top">
            <div className="product-link">
              <img src={productImg3} alt="product" />
              <p>SoftCare Pro Classic</p>
            </div>
          </a>
          <a href="#top">
            <div className="product-link">
              <img src={productImg4} alt="product" />
              <p>SoftCare² Juno</p>
            </div>
          </a>
          <a href="#top">
            <div className="product-link">
              <img src={productImg5} alt="product" />
              <p>SoftCare² Juno Classic</p>
            </div>
          </a>
          <a href="#top">
            <div className="product-link">
              <img src={productImg6} alt="product" />
              <p>SoftCare² Pro Touchless</p>
            </div>
          </a>
          <a href="#top">
            <div className="product-link">
              <img src={productImg7} alt="product" />
              <p>SoftCare² Takt</p>
            </div>
          </a>
        </div>
      </div>

      <div className="nav-card3">
        <div className="card3-cover">
          <h3>Проекты</h3>
          <div className="card3-links">
            <a href="#top">Реализованные проекты</a>
          </div>
        </div>
        <div className="card3-cover">
          <h3>Инфостраницы</h3>
          <div className="card3-links">
            <a href="#top">О компании WashTec</a>
            <a href="#top">О компании ООО “Акватехносервис”</a>
            <a href="#top">Отзывы</a>
            <a href="#top">Сертификаты</a>
            <a href="#top">Вопрос-ответ</a>
            <a href="#top">Контакты</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
