import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Slide } from "react-slideshow-image";
import { pastEvents, upcomingEvents } from "../data/events";
import properties from "../components/layout/sliderArrow";
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  const events = upcomingEvents.length
    ? [...pastEvents.slice(0, 2), upcomingEvents[0]]
    : [...pastEvents.slice(0, 3)];
  const indicators = (index) => <div className="indicator">.</div>;

  return (
    <>
      <Helmet>
        <title>I.I. Umeh </title>
        <meta
          name="description"
          content="Iyke have been a lecturer in Nnamdi Azikiwe University since 2012. He is also the CEO/FOUNDER of PA-CENT Technologies, an ICT firm
            domiciled in Nigeria."
        />

        <meta
          name="keywords"
          content="portfolio, lecturer, unizik, teacher, pacent, umeh, umeh, ikechukwu umeh, computer science, diiu, pacent-tech, Nnamdi-Azikiwe"
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
          <img src="/images/drIyke.webp" alt="dr.iyke" loading="lazy" />
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
            <h3>I.I. Umeh</h3>
          </div>
        </div>
        <div className="h-auto text-white">
          <div className="min-h-[10vh] md:min-h-[10vh] bg-eventsBanner bg-no-repeat bg-cover grid place-content-center relative">
            <h1 className="text-center text-white text-2xl md:text-5xl font-bold md:leading-snug container max-w-[784px]">
              Events
            </h1>
          </div>
          <div className="mx-auto my-10 text-gray-50 w-full p-2 pt-28">
            <Slide transitionDuration={800} {...properties} indicators={indicators}>
              {events.map((evt, index) => (
                <div
                  key={index}
                  style={{
                    backgroundImage: `linear-gradient(rgba(81, 83, 87, 0.1), rgba(81, 83, 87, 0.7)), ${evt.imageUrl}`,
                  }}
                  className="bg-[#000] bg-no-repeat bg-[length:100%_100%] bg-cover grid place-content-center w-full h-[80vh]"
                >
                  <h3 className="text-4xl text-[#1c2438] font-bold mb-7 underline">
                    {evt.eventType}
                  </h3>
                  <i className="text-3xl font-bold text-white"> {evt.title}</i>
                  <p>{evt.date}</p>
                  <h3 className="cursor-pointer flex items-center gap-3 justify-center text-2xl font-medium bg-contactCard hover:bg-black rounded-md transition duration-500 cursor mt-5">
                    See more events {<FaArrowRight />}
                  </h3>
                </div>
              ))}
            </Slide>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
