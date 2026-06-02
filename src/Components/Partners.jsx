import "../pages/Home/Home.css";

import partnerImg1 from "../assets/icons/partners-img1.png";
import partnerImg2 from "../assets/icons/partners-img2.png";
import partnerImg3 from "../assets/icons/partners-img3.png";
import partnerImg4 from "../assets/icons/partners-img4.png";

const Partners = () => {
  return (
    <div>
      <section className="partners">
        <div className="row">
          <h2>
            Производители моечного оборудования,
            <br /> с которыми мы работаем
          </h2>

          {/* partners section cards */}
          <div className="partners-cards">
            {/* partners card */}
            <div className="partner-card">
              <img src={partnerImg1} alt="logo" />
              <div className="partner-side-text">
                <p>
                  Мировой лидер по производству автомобильных моек. Именно
                  WashTec задает стандарты для автомоек всех типов – портальные
                  и конвейерные автомойки для легковых и грузовых автомобилей, а
                  также для моек самообслуживани
                </p>
              </div>

              <div className="partner-tick">
                <h3>WashTec - это:</h3>
                <p>
                  <i className="ri-check-fill"></i>новые победы и самые высокие
                  стандарты мытья автомобилей на мировом рынке
                </p>
                <p>
                  <i className="ri-check-fill"></i>научный подход и техническая
                  реализация в каждой единице оборудования
                </p>
                <p>
                  <i className="ri-check-fill"></i>постоянное движение и поиск
                  лучших решений для идеального исполнения
                </p>
                <p>
                  <i className="ri-check-fill"></i>анализ потребностей клиента и
                  предоставление выгодных вариантов сотрудничества
                </p>
              </div>

              <a href="#top" className="btn">
                Читать больше
              </a>
            </div>

            {/* partners card */}
            <div className="partner-card">
              <img
                src={partnerImg2}
                style={{ width: "180px", height: "auto" }}
                alt="logo"
              />
              <div className="partner-side-text">
                <p>
                  Компания специализируется на производстве оборудования для
                  моек самообслуживания и робот-моек уже 11 лет. Основной рынок
                  поставок - Россия, Латвия, Эстония, Грузия, Казахстан,
                  Узбекистан. Установлено более 200 моечных комплексов, где были
                  учтены предпочтения по бюджету каждого клиента
                </p>
              </div>

              <div className="partner-tick">
                <h3>Мой-ка! DS-Business - это:</h3>
                <p>
                  <i className="ri-check-fill"></i>инновации в сфере
                  производства моек самообслуживания
                </p>
                <p>
                  <i className="ri-check-fill"></i>технологии будущего.
                  Производство моек нового поколения из высококачественных
                  комплектующих немецких и итальянских производителей
                </p>
                <p>
                  <i className="ri-check-fill"></i>упор на высокую
                  рентабельность. Клиент окупает свои затраты быстрее за счет
                  грамотно организованного моечного комплекса
                </p>
              </div>

              <a href="#top" className="btn">
                Подробнее
              </a>
            </div>

            {/* partners card */}
            <div className="partner-card">
              <img src={partnerImg3} alt="logo" />
              <div className="partner-side-text">
                <p>
                  Российский производитель автохимии, автокосметики, средств для
                  профессионального клининга и стирки. Все продукты марки
                  Cleanol эффективны, экономичны и соответствуют высоким
                  экологическим стандартам
                </p>
              </div>

              <div className="partner-tick">
                <h3>Cleanol - это:</h3>
                <p>
                  <i className="ri-check-fill"></i>одна из лидирующих компаний
                  по производству химии для автоматических моек, автомоек
                  самообслуживания, профессионального клининга и сегмента HoReCa
                </p>
                <p>
                  <i className="ri-check-fill"></i>комплексный подход в решении
                  задач клиента
                </p>
                <p>
                  <i className="ri-check-fill"></i>высокое качество продукции
                </p>
              </div>
            </div>

            {/* partners card */}
            <div className="partner-card">
              <img
                src={partnerImg4}
                style={{ width: "180px", height: "auto" }}
                alt="logo"
              />
              <div className="partner-side-text">
                <p>
                  Успешно развивающееся предприятие в области проектирования,
                  производства и монтажа автомоечных комплексов для
                  автоматической мойки пассажирского (трамваи, автобусы,
                  троллейбусы, микроавтобусы), грузового автотранспорта, вагонов
                  метрополитена и железнодорожных вагонов в различной
                  комплектации
                </p>
              </div>

              <div className="partner-tick">
                <h3>Агроснабтехсервис - это:</h3>
                <p>
                  <i className="ri-check-fill"></i>простота конструкции
                </p>
                <p>
                  <i className="ri-check-fill"></i>надежность и долговечность
                </p>
                <p>
                  <i className="ri-check-fill"></i>скорость выполнения заказа
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;
