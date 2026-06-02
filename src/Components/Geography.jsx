import "../pages/Home/Home.css";

import geographyImg from "../assets/images/geography-img.svg";

const Geography = () => {
  return (
    <div>
      <section className="geography">
        <div className="row">
          <hr />

          <div className="geography-info">
            {/* geography description */}
            <div className="geography-desc">
              <h1>
                60<sup>+</sup>
              </h1>
              <div className="geography-text">
                <p>
                  Нами введены в эксплуатацию более 60-ти автомоек на территории
                  Беларуси.
                </p>
                <p>
                  В настоящее время ведутся работы по монтажу 5-ти автомоечных
                  комплексов на территории Российской федерации
                </p>
              </div>
            </div>

            {/* geography image */}
            <img src={geographyImg} alt="map" />
          </div>

          <hr />
        </div>
      </section>
    </div>
  );
};

export default Geography;
