import Button from "./Button/Button";
import Line from "./Line/Line";
import Logo from "./Logo/Logo";
import Nav from "./Nav/Nav";
import styles from "./portfolio.module.css";
import Text from "./Text/Text";
function PortFolio() {
  const icons = ["../linkedIn.png", "../ig.png",'github.png','twitter.png','facebook.png'];

  const socials = icons.map((icon, index) => {
    return (
      <div
        className={`${styles.icon} rounded-full flex align-middle justify-center bg-slate-600 cursor-pointer`}
      >
        <img src={icon} alt="" key={index} />
      </div>
    );
  });

  return (
    <div className={styles.portfolio}>
      <header>
        <div className={styles.mobileNav}>
          <Nav />
        </div>
        <div className={styles.logo}>
          <Logo />
        </div>

        <div className={styles.desktopNav}>
          <Nav />
        </div>

        <div className={styles.hireMe}>
          <Button children={"Hire Me"} className="filled" />
        </div>
      </header>
      <main>
        <div className={styles.home} id="home">
          <aside className={styles.leftaside}>
            <h2 className="text-2xl text-slate-600">Hi, I'm</h2>
            <h2 className="text-3xl text-slate-500">Essel Apusiga Abraham</h2>
            <br />
            <p className={` ${styles.role} text-6xl`}>FrontEnd Engineer</p>
            <br />
            <div className="flex gap-2 justify-center">
              {socials}
            </div>
            <br />

            <div className={styles.buttons}>
              <Button children={"Hire me"} className="filled" />
              <Button children={"Download CV"} className="outlined" />
            </div>
            <br />
            <section
              className={`${styles.experience}  w-full h-10  rounded-md`}
            >
              <div className="experience">
                <Text
                  variant="h2"
                  text="5+"
                  className="text-xl"
                  color="orange"
                />
                <Text
                  variant="h2"
                  text="Experience"
                  className="text-xl"
                  color="stale"
                />
              </div>

              <Line />
              <div className="experience">
                <Text
                  variant="h2"
                  text="20+"
                  className="text-xl"
                  color="orange"
                />
                <Text
                  variant="h2"
                  text="Project done"
                  className="text-xl"
                  color="stale"
                />
              </div>
              <Line />
              <div className="experience">
                <Text
                  variant="h2"
                  text="80+"
                  className="text-xl"
                  color="orange"
                />
                <Text
                  variant="h2"
                  text="Happy Clients"
                  className="text-xl"
                  color="stale"
                />
              </div>
            </section>
          </aside>

          <aside className="rightaside">
            <div className={styles.profile}>
              <img src="/essel.png" alt="essel" />
            </div>
          </aside>
        </div>
      </main>
      <footer>
        <div>
          <Logo />
        </div>
        <div />
      </footer>
    </div>
  );
}

export default PortFolio;
