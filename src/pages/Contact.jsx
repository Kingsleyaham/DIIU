import { RevolvingDot } from "react-loader-spinner";
import { Helmet } from "react-helmet";

const Contact = ({ handleInput, inputs, handleFormSubmit, sending }) => {
  const inputClass =
    "focus:outline-none w-full font-extrabold text-black py-0 px-4 m-auto h-12 rounded-2xl max-[425px]:w-full";

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

      <div className="contactMe flex flex-col h-screen items-center justify-center max-[177px]:mt-36 gap-8 mt-20 sm:mt-20 md:mt-16">
        <h1 className="text-3xl text-white font-medium">Get in Touch</h1>

        <div
          className="contactCard border-2 border-solid border-contactBorderColor 
                    bg-contactCard shadow-contactCard w-[40%] max-[1090px]:w-[60%] 
                    max-[631px]:w-[80%] max-[425px]:w-[90%] max-[425px]:h-[30rem] max-[178px]:h-auto
                    max-[425px]:gap-4 max-[425px]:p-4 h-fit flex flex-col py-4 px-8 gap-7 rounded-xl"
        >
          <p className="text-center text-lg font-medium text-white pb-3 max-[425px]:text-base">
            Please fill out the quick form and we will be in touch with
            lightening speed.
          </p>

          <form
            className="flex flex-col gap-12 max-[425px]:gap-8 max-[262px]:gap-4"
            onSubmit={handleFormSubmit}
          >
            <input
              type="text"
              placeholder="Name"
              className={inputClass}
              value={inputs?.name}
              onChange={(e) => handleInput(e, "name")}
              required
            />
            <input
              type="email"
              value={inputs?.email}
              className={inputClass}
              onChange={(e) => handleInput(e, "email")}
              placeholder="Your email address"
              required
            />
            <textarea
              className="focus:outline-none w-full h-32 font-extrabold p-4 m-auto text-black rounded-2xl max-[425px]:w-full"
              value={inputs?.message}
              onChange={(e) => handleInput(e, "message")}
              placeholder="Message"
              required
            />

            <button
              className="cursor-pointer transition duration-500 shadow-md shadow-[rgba(0, 0, 0, 0.4)]
               text-white bg-[gray] flex items-center justify-center ml-auto w-24 h-8 
               rounded-lg active:shadow-contactButtonActive max-[425px]:w-full 
               hover:bg-contactButtonHover disabled:hover:bg-[contactButtonDisabledHover]
               disabled:bg-contactButtonDisabled disabled:cursor-not-allowed"
              disabled={sending}
            >
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
