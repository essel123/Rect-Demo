import Form_ from "./Form_";

function Contact() {
  const socials = [
    "/twitter.svg",
    "/whatsapp-black.svg",
    "/github-black.svg",
    "/linkedin-black.svg"
  ];
  return (
    <div>
      <section className="py-10 px-5 md:px-10 lg:px-10 bg-gray-100">
        <h1 className="text-3xl font-bold text-center mb-6">Contact Me</h1>
        <div className="max-w-md mx-auto">
          {/* <form className="bg-white shadow-md rounded-lg p-6">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </form> */}

          <Form_ />
        </div>
        <div className="text-center mt-6">
          <p className="text-gray-700">Or connect with me on:</p>
          <div className="flex justify-center mt-2 gap-3">
            {socials.map((social, index) => {
              return (
                <a href="">
                  {" "}<img
                    className={
                      index == 2
                        ? "w-12 cursor-pointer hover:scale-105"
                        : "w-10 hover:scale-105 cursor-pointer"
                    }
                    src={social}
                    alt="alt"
                    key={index}
                  />
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
