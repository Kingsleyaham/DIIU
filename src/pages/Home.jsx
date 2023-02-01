import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>I.I. Umeh </title>
        <meta
          name="description"
          content="Dr. Iyke have been a lecturer in Nnamdi Azikiwe University since 2012. He is also the CEO/FOUNDER of PA-CENT Technologies, an ICT firm
            domiciled in Nigeria."
        />

        <meta
          name="keywords"
          content="portfolio, lecturer, unizik, teacher, pacent, dr. umeh, umeh, ikechukwu umeh, computer science, diiu, pacent-tech, Nnamdi-Azikiwe"
        />
      </Helmet>

      <div className="homepg">
        <div className="upperSection">
          <h1>
            <span>Hi 🖐, I'm Dr. Ikechukwu Innocent Umeh,</span>
            <br />
            a Senior Lecturer in the department of Computer Science in the
            University of Nnamdi Azikiwe, Awka, Anambra
            <br />
            <br />
            <Link to="/about">
              <button>
                ABOUT ME <i className="fa-solid fa-arrow-right"></i>
              </button>
            </Link>
          </h1>
          <img src="/images/drIyke.PNG" alt="dr.iyke" loading="lazy" />
        </div>
        <div className="lowerSection">
          <div className="card">
            <h1>
              <i className="fa-solid fa-quote-left"></i>
              &nbsp; Life is like a computer, full of programs and processes and
              <br />
              algorithms. Learn to live it by flowing through <br />
              the processes like a flowchart &nbsp;
              <i className="fa-solid fa-quote-right"></i>
            </h1>
            <h3>- Dr. I.I. Umeh</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
