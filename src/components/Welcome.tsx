import "../css/welcome.css";

function Welcome() {
  return (
    <div className="profile">
      <div className=" w-80  ">
        <img className="w-80" src="profile.jpg" alt="" />
      </div>

      <section className="address lg:shadow-none md:shadow-none sm:shadow-sm sm:px-5">
        <h1 className="font-bold text-xl mb-5">
          <span className="">Welcome!</span> <br />{" "}
        </h1>
        <div className=" text-center md:text-center lg:text-left ">
          <p className="text-pretty">
            I'm a passionate front-end developer specializing in React.js and
            intermediate in Flutter mobile app development. My journey in tech
            is driven by a commitment to creating seamless, responsive user
            interfaces that bring digital experiences to life.
          </p>

          <button className="p-2 rounded btn-learn border mt-2 border-blue-500 hover:border-blue-700 ">
            Learn more ...
          </button>
        </div>
      </section>
    </div>
  );
}

export default Welcome;
