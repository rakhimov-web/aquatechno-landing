import "../pages/Home/Home.css";

const Hero = () => {
  return (
    <div>
      <section className="hero" id="top">
        {/* ----- row ----- */}
        <div className="row">
          {/* hero description */}
          <div className="hero-desc">
            <div className="hero-text">
              <h2>Наши знания -</h2>
              <h1>Ваши знания</h1>
            </div>

            <div className="hero-text">
              <h2>Наш опыт -</h2>
              <h1>Ваш опыт</h1>
            </div>

            <div className="hero-text">
              <h2>Наша работа -</h2>
              <h1>
                Ваш стабильно <br />
                растущий бизнес
              </h1>
            </div>
          </div>

          {/* hero images */}
          <div className="hero-cards">
            <div className="card card1">
              <div className="card-desc">
                <h2>Мойка самообслуживания</h2>
                <p>
                  Минимальные затраты на ведение бизнеса. Получение прибыли 24/7
                </p>
              </div>
            </div>

            <div className="card card2">
              <div className="card-desc">
                <h2>Максимум вариантов</h2>
                <p>
                  Туннельная мойка для легковых автомобилей с универсальными
                  модулями
                </p>
              </div>
            </div>

            <div className="card card3">
              <div className="card-desc">
                <h2>
                  Тщательная очистка грузового автомобиля в кратчайшие сроки
                </h2>
                <p>
                  Минимальные затраты на ведение бизнеса. Получение прибыли 24/7
                </p>
              </div>
            </div>

            <div className="card card4">
              <div className="card-desc">
                <h2>
                  Портальная мойка для легковых авто - выгода ваших вложений
                </h2>
                <p>Умная техника - экономия времени и денег</p>
              </div>
            </div>

            <div className="card card5">
              <div className="card-desc">
                <h2>Робот-мойка</h2>
                <p>
                  Быстрые темпы окупаемости, удаленное управление и оптимизация
                  расходов
                </p>
              </div>
            </div>

            <div className="card card6">
              <div className="card-desc">
                <h2>
                  Высокое качество запчастей и комплектующих для ваших моечных
                  комплексов
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
