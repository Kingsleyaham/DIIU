import { RevolvingDot } from "react-loader-spinner";

const Contact = ({ handleInput, inputs, handleFormSubmit, sending }) => {
  return (
    <div className="contactMe">
      <h1>Get in Touch</h1>
      <div className="contactCard">
        <p>
          Please fill out the quick form and we will be in touch with lightening
          speed.
        </p>
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={inputs.name}
            onChange={(e) => handleInput(e, "name")}
            required
          />
          <input
            type="email"
            value={inputs.email}
            onChange={(e) => handleInput(e, "email")}
            placeholder="Your email address"
            required
          />
          <textarea
            value={inputs.message}
            onChange={(e) => handleInput(e, "message")}
            placeholder="Message"
            required
          />
          <button disabled={sending}>
            {sending && <RevolvingDot
              height="20"
              width="20"
              radius="6"
              color="#1c2438"
              secondaryColor=""
              ariaLabel="revolving-dot-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />}
            &nbsp;
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
