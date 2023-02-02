import { RevolvingDot } from "react-loader-spinner";
import { Helmet } from "react-helmet";

const Contact = ({ handleInput, inputs, handleFormSubmit, sending }) => {
  return (
    <>
      <Helmet>
        <title>I.I. Umeh | Contact</title>
        <meta
          name="description"
          content="Get in touch with me and send me a message. I'd be happy to hear from you"
        />
        <meta
          name="keywords"
          content="contact, diiu, pacent, unizik, lecturer"
        />
      </Helmet>

      <div className="contactMe md:mt-20 mt-10">
        <h1>Get in Touch</h1>
        <div className="contactCard w-5/12 h-fit flex flex-col py-4 px-8 gap-7 rounded-xl">
          <p className="text-lg font-medium text-white pb-3">
            Please fill out the quick form and we will be in touch with
            lightening speed.
          </p>
          <form onSubmit={handleFormSubmit}>
            <input
              type="text"
              placeholder="Name"
              value={inputs?.name}
              onChange={(e) => handleInput(e, "name")}
              required
            />
            <input
              type="email"
              value={inputs?.email}
              onChange={(e) => handleInput(e, "email")}
              placeholder="Your email address"
              required
            />
            <textarea
              value={inputs?.message}
              onChange={(e) => handleInput(e, "message")}
              placeholder="Message"
              required
            />
            <button disabled={sending}>
              {sending && (
                <RevolvingDot
                  height="20"
                  width="20"
                  radius="6"
                  color="#1c2438"
                  secondaryColor=""
                  ariaLabel="revolving-dot-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                />
              )}
              &nbsp; Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
