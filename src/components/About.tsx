function About() {
  return (
    <div>
      <section className="py-10 px-5 md:px-10 lg:px-10">
        <h1 className="text-3xl font-bold text-center mb-6">About Me</h1>
        <div className="flex flex-col md:flex-row items-center">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-semibold">
              Hello! I'm{" "}
              <span className="text-orange-400">Essel Apusiga Abraham</span>
            </h2>
            <p className="mt-2 text-gray-700">
              I am a passionate front-end developer and Flutter enthusiast with
              a love for creating engaging and user-friendly applications. My
              journey in tech began with web development, where I honed my
              skills in HTML, CSS, and JavaScript, and later expanded my
              expertise to mobile development using Flutter.
            </p>
            <p className="mt-2 text-gray-700">
              With a strong focus on responsive design and performance
              optimization, I strive to deliver high-quality digital
              experiences. I enjoy turning complex problems into simple,
              beautiful, and intuitive designs. I’m always eager to learn new
              technologies and best practices to stay updated in this fast-paced
              field.
            </p>
            <h3 className="text-xl font-semibold mt-4">Skills</h3>
            <ul className="list-none list-inside mt-2  md:list-disc lg:list-disc">
              <li>HTML, CSS, JavaScript</li>
              <li>React.js</li>
              <li>Flutter & Dart</li>
              <li>Responsive Design</li>
              <li>Version Control (Git)</li>
            </ul>
            <h3 className="text-xl font-semibold mt-4">Let's Connect</h3>
            <p className="mt-2 text-gray-700">
              I’m currently open to freelance opportunities and collaborations.
              Feel free to reach out via my{" "}
              <a
                href="mailto:abrahamessel156@gmail.com"
                className="text-blue-500 underline"
              >
                email
              </a>{" "}
              or connect with me on
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                {" "}LinkedIn
              </a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
