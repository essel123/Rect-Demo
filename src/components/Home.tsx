import { Link, Outlet } from "react-router-dom";

function Home() {
  return (
    <div className="App w-full h-screen flex justify-center ">
      <nav className="nav  w-80">
        <li>
          <Link to="/landing" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/form" className="nav-link">
            Form
          </Link>
        </li>
        
      </nav>
      <Outlet />
    </div>
  );
}

export default Home;
