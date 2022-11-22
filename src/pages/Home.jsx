import { Link } from "react-router-dom";
const Home = () => {
  return (
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
            algorithms. Learn to live it by flowing through the processes like a
            flowchart &nbsp;
            <i className="fa-solid fa-quote-right"></i>
          </h1>
          <h3>- Dr. I.I. Umeh</h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
