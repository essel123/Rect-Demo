import "../css/nav.css";

function NavBar() {
  const navs = ["Home", "About", "Projects", "Contact"];

  return (
    <div className="bg">
      <div className="nav">
        <ul className=" gap-2">
          {navs.map((nav, id) => {
            return (
              <li
                className="text-md font-bold cursor-pointer hover:text-slate-700   "
                key={id}
              >
                <a href={`#${nav}`}>
                  {nav}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
