import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navOptions = (
    <>
      <li>
        <NavLink 
          to="/" 
          className="text-white hover:text-yellow-500"
          activeClassName="text-yellow-500 font-bold"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink 
          to="/createStory" 
          className="text-white hover:text-yellow-500"
          activeClassName="text-yellow-500 font-bold"
        >
          Create Story
        </NavLink>
      </li>
      <li>
        <NavLink 
          to="/myStory" 
          className="text-white hover:text-yellow-500"
          activeClassName="text-yellow-500 font-bold"
        >
          My Story
        </NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar fixed z-10 text-white max-w-screen-xl">
        <div className="navbar-start">
          <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-cyan-800 text-white rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {navOptions}
            </ul>
          </div>
          <Link to="/"><a className="btn btn-ghost text-xl">BranchTales</a></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navOptions}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Sign In</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;