import "../pages/Home/Home.css";

import projectImg1 from "../assets/images/project-img1.png";
import projectImg2 from "../assets/images/project-img2.png";
import projectImg3 from "../assets/images/project-img3.png";
import projectImg4 from "../assets/images/project-img4.png";
import projectImg5 from "../assets/images/project-img5.png";
import projectImg6 from "../assets/images/project-img6.png";
import projectImg7 from "../assets/images/project-img7.png";
import projectImg8 from "../assets/images/project-img8.png";

const Projects = () => {
  return (
    <div>
      <section className="projects">
        <div className="row">
          {/* projects sectioni header info */}
          <div className="projects-top">
            <h2>Наши проекты</h2>
            <a href="#top" className="btn">
              Все проекты
            </a>
          </div>

          {/* projects section cards */}
          <div className="project-cards">
            {/* project card */}
            <div className="project-card">
              {/* card image */}
              <div className="pr-card-image">
                <img src={projectImg1} alt="image" />
              </div>

              {/* card top title */}
              <div className="project-card-title">
                <h3>ОАО «Газпром трансгаз Беларусь» </h3>
                <p>(Республика Беларусь, Крупки)</p>
              </div>

              {/* card description */}
              <div className="pr-card-desc">
                <p>
                  <i className="ri-check-fill"></i>
                  Портальная мойка для грузового транспорта WashTecMaxiWash
                  Vario
                </p>
                <p>
                  <i className="ri-check-fill"></i>
                  Система оборотного водоснабжения MFА-20
                </p>
              </div>
            </div>

            {/* project card */}
            <div className="project-card">
              {/* card image */}
              <div className="pr-card-image">
                <img src={projectImg2} alt="image" />
              </div>

              {/* card top title */}
              <div className="project-card-title">
                <h3>ПЧУП «БелИстоТех»</h3>
                <p>Республика Беларусь, Минск</p>
              </div>

              {/* card description */}
              <div className="pr-card-desc">
                <p>
                  <i className="ri-check-fill"></i>
                  Мойка самообслуживания WashTec на 5 постов
                </p>
              </div>
            </div>

            {/* project card */}
            <div className="project-card">
              {/* card image */}
              <div className="pr-card-image">
                <img src={projectImg3} alt="image" />
              </div>

              {/* card top title */}
              <div className="project-card-title">
                <h3>ООО «Бугинком» </h3>
                <p>(Республика Беларусь, Брест)</p>
              </div>

              {/* card description */}
              <div className="pr-card-desc">
                <p>
                  <i className="ri-check-fill"></i>
                  Туннельная мойка SL-50
                </p>
                <p>
                  <i className="ri-check-fill"></i>
                  Система оборотного водоснабжения WashTec MFM-30
                </p>
              </div>
            </div>

            {/* project card */}
            <div className="project-card">
              {/* card image */}
              <div className="pr-card-image">
                <img src={projectImg4} alt="image" />
              </div>

              {/* card top title */}
              <div className="project-card-title">
                <h3>РУП «Белоруснефть-Брестоблнефтепродукт»</h3>
                <p>(Республика Беларусь, Брест)</p>
              </div>

              {/* card description */}
              <div className="pr-card-desc">
                <p>
                  <i className="ri-check-fill"></i>
                  Проездная мойка для грузового транспорта WashTec MaxiWash
                  Express
                </p>
                <p>
                  <i className="ri-check-fill"></i>
                  Система оборотного водоснабжения WashTec MFM-30
                </p>
              </div>
            </div>

            {/* project card */}
            <div className="project-card">
              {/* card image */}
              <div className="pr-card-image">
                <img src={projectImg5} alt="image" />
              </div>

              {/* card top title */}
              <div className="project-card-title">
                <h3>ИООО «Лукойл» </h3>
                <p>(Республика Беларусь, Брест)</p>
              </div>

              {/* card description */}
              <div className="pr-card-desc">
                <p>
                  <i className="ri-check-fill"></i>
                  Портальная мойка для легкового транспорта WashTec SoftCare Pro
                </p>
              </div>
            </div>

            {/* project card */}
            <div className="project-card">
              {/* card image */}
              <div className="pr-card-image">
                <img src={projectImg6} alt="image" />
              </div>

              {/* card top title */}
              <div className="project-card-title">
                <h3>ООО «АвтоКит плюс»</h3>
                <p>(Республика Беларусь, Минск)</p>
              </div>

              {/* card description */}
              <div className="pr-card-desc">
                <p>
                  <i className="ri-check-fill"></i>
                  Туннельная мойка WashTec SL-75
                </p>
                <p>
                  <i className="ri-check-fill"></i>
                  Система оборотного водоснабжения WashTec MFM-30
                </p>
              </div>
            </div>

            {/* project card */}
            <div className="project-card">
              {/* card image */}
              <div className="pr-card-image">
                <img src={projectImg7} alt="image" />
              </div>

              {/* card top title */}
              <div className="project-card-title">
                <h3>ОАО «Мозырский НПЗ»</h3>
                <p>(Республика Беларусь, Мозырь)</p>
              </div>

              {/* card description */}
              <div className="pr-card-desc">
                <p>
                  <i className="ri-check-fill"></i>
                  Проездная щеточная грузовая мойка
                </p>
              </div>
            </div>

            {/* project card */}
            <div className="project-card">
              {/* card image */}
              <div className="pr-card-image">
                <img src={projectImg8} alt="image" />
              </div>

              {/* card top title */}
              <div className="project-card-title">
                <h3>ОАО «Гомельтранснефть Дружба»</h3>
                <p>(Республика Беларусь, Гомель)</p>
              </div>

              {/* card description */}
              <div className="pr-card-desc">
                <p>
                  <i className="ri-check-fill"></i>
                  Портальная мойка для легкового транспорта WashTec SoftCare Pro
                </p>
                <p>
                  <i className="ri-check-fill"></i>
                  Система оборотного водоснабжения WashTec AquaPur
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
