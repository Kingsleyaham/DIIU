import Qualifications from "../../components/portfolios/Qualifications";
import WorkExperiences from "../../components/portfolios/WorkExperiences";

const About = () => {
  return (
    <div className="container mx-auto bg-gray-100 m-3 rounded-sm shadow-md text-gray-900 mb-80">
      <div className="mx-auto pt-3 md:flex md:justify-between md:items-center p-5 mb-10">
        <div className="py-2 mx-auto md:w-3/6 flex justify-around">
          <img src="/images/dr.iyke2.png" alt="Dr Iyke Image" />
        </div>
        <div className="md:w-3/6 pt-10 lg:px-10 mx-auto sm:px-5">
          <h1 className="text-3xl font-semibold py-1 pb-3 text-gray-800">
            About Me
          </h1>
          <p className="leading-6 text-base">
            I have been a lecturer in Nnamdi Azikiwe University since 2012.
            During this time, I have had opportunities to supervise the "Design
            and Development of a Tertiary Institution Campus Information System
            (2022)" and "The Development of a Virtual Medical Diagnostic System
            for Detecting and Analyzing Notifiable Diseases in Nigeria (2022)".
          </p>
          <br />
          <p className="leading-6">
            I'm also the CEO/FOUNDER of PA-CENT Technologies, an ICT firm
            domiciled in Nigeria. We offer computer and related services
            including consulting in information technology.
          </p>
          <br />
          <p className="leading-6">
            I do research in Computer and Society and Computer Communications
            (Networks). My current project is 'Modelled approach to network
            bandwidth conservation'. And I also have 23 publications.
          </p>
        </div>
      </div>
      <Qualifications />
      <WorkExperiences />
    </div>
  );
};

export default About;
