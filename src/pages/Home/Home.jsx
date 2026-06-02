import "./Home.css";

// sections
import Header from "../../Components/Header";
import Hero from "../../Components/Hero";
import Quote from "../../Components/Quote";
import About from "../../Components/About";
import Partners from "../../Components/Partners";
import Geography from "../../Components/Geography";
import Customer from "../../Components/Customer";
import Quote2 from "../../Components/Quote2";
import Branches from "../../Components/Branches";
import Projects from "../../Components/Projects";
import Testimonials from "../../Components/Testimonials";
import Contact from "../../Components/Contact";
import Footer from "../../Components/Footer";

const Home = () => {
  return (
    <div className="container">
      {/* ===== Header section start ===== */}

      <Header />

      {/* ===== Header section end ===== */}

      {/* ===== Testimonials modal section start ===== */}

      {/* ===== Testimonials modal section end ===== */}

      <main>
        {/* ===== Hero section start ===== */}

        <Hero />

        {/* ===== Hero section end ===== */}

        {/* ===== Quote section start ===== */}

        <Quote />

        {/* ===== Quote section end ===== */}

        {/* ===== About section start ===== */}

        <About />

        {/* ===== About section end ===== */}

        {/* ===== Partners section start ===== */}

        <Partners />

        {/* ===== Partners section end ===== */}

        {/* ===== Geography section start ===== */}

        <Geography />

        {/* ===== Geography section end ===== */}

        {/* ===== Customer section start ===== */}

        <Customer />

        {/* ===== Customer section end ===== */}

        {/* ===== Quote 2 section start ===== */}

        <Quote2 />

        {/* ===== Quote 2 section end ===== */}

        {/* ===== Branches section start ===== */}

        <Branches />

        {/* ===== Branches section end ===== */}

        {/* ===== Projects section start ===== */}

        <Projects />

        {/* ===== Projects section end ===== */}

        {/* ===== Testimonials section start ===== */}

        <Testimonials />

        {/* ===== Testimonials section end ===== */}

        {/* ===== Contact section start ===== */}

        <Contact />

        {/* ===== Contact section end ===== */}
      </main>

      {/* ===== Footer section start ===== */}

      <Footer />

      {/* ===== Footer section end ===== */}
    </div>
  );
};

export default Home;
