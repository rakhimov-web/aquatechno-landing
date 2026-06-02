import "../pages/Home/Home.css";

const Branches = () => {
  return (
    <div>
      <section className="branches">
        <div className="row">
          <h2>
            Купить моечное оборудование производителей
            <b> WashTec, Мой-ка! DS-Business и Агроснабтехсервис</b> в городах
            Беларуси
          </h2>
          <p>
            Портальные и туннельные мойки, мойки самообслуживания, робот-мойки
            для легковых и грузовых автомобилей. Также комплектующие, запчасти и
            аксессуары для любого моечного комплекса
          </p>
          <ul className="branch-links">
            <li>
              <a href="#top">Брест</a>
            </li>
            <li>
              <a href="#top">Минск</a>
            </li>
            <li>
              <a href="#top">Витебск</a>
            </li>
            <li>
              <a href="#top">Гродно</a>
            </li>
            <li>
              <a href="#top">Гомель</a>
            </li>
            <li>
              <a href="#top">Могилев</a>
            </li>
          </ul>

          {/* map */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191885.5026363024!2d69.1392823791033!3d41.28251254580345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc5d4a96c%3A0x203b57367353f478!2sTashkent%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1709560000000!5m2!1sen!2s"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Branches;
