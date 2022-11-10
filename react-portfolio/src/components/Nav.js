import logo from "../assets/tom-alogo.png"



const Nav = ({ setCurrentPage }) => {
  return (
    <div className="navbar bg-primary mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          {/* Mobile Menu */}
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-transparent rounded-box w-52">
            <li>
              <a onClick={() => setCurrentPage("AboutMe")} href="#AboutMe" className="text-secondary-content">
                About Me
              </a>
            </li>

            <li>
              <a onClick={() => setCurrentPage("Work")} href="#Work" className="text-secondary-content">Work</a>
            </li>

            <li>
              <a onClick={() => setCurrentPage("ContactMe")} href="#ContactMe" className="text-secondary-content">Contact Me</a>
            </li>

            <li>
              <a className="text-secondary-content">Resume</a>
            </li>

          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl" onClick={() => setCurrentPage("")} href="#home">
          <img src={logo} alt="logo" className="object-cover mx-auto h-12 w-12 rounded-full"
            id="avatarPhoto" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">

          {/* About Me Button */}
          <a onClick={() => setCurrentPage("AboutMe")} href="#AboutMe" className="relative px-5 py-3 mx-2 overflow-hidden font-medium text-primary bg-neutral rounded-lg shadow-inner group">
            <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2  group-hover:w-full ease"></span>
            <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2  group-hover:w-full ease"></span>
            <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-300 bg-base group-hover:h-full ease"></span>
            <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-300 bg-base group-hover:h-full ease"></span>
            <span className="absolute inset-0 w-full h-full duration-300 delay-100 bg-primary opacity-0 group-hover:opacity-100"></span>
            <span className="relative transition-colors duration-300 delay-300 group-hover:text-neutral-focus ease">About Me</span>
          </a>

          {/* Project Button */}
          <a onClick={() => setCurrentPage("Work")} href="#Work" className="relative px-5 py-3 mx-2 overflow-hidden font-medium text-primary bg-neutral rounded-lg shadow-inner group">
            <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2  group-hover:w-full ease"></span>
            <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2  group-hover:w-full ease"></span>
            <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-300 bg-base group-hover:h-full ease"></span>
            <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-300 bg-base group-hover:h-full ease"></span>
            <span className="absolute inset-0 w-full h-full duration-300 delay-100 bg-primary opacity-0 group-hover:opacity-100"></span>
            <span className="relative transition-colors duration-300 delay-300 group-hover:text-neutral-focus ease">Work</span>
          </a>

          {/* Contact Me Button */}
          <a onClick={() => setCurrentPage("ContactMe")} href="#ContactMe" className="relative px-5 py-3 mx-2 overflow-hidden font-medium text-primary bg-neutral rounded-lg shadow-inner group">
            <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2  group-hover:w-full ease"></span>
            <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2  group-hover:w-full ease"></span>
            <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-300 bg-base group-hover:h-full ease"></span>
            <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-300 bg-base group-hover:h-full ease"></span>
            <span className="absolute inset-0 w-full h-full duration-300 delay-100 bg-primary opacity-0 group-hover:opacity-100"></span>
            <span className="relative transition-colors duration-300 delay-300 group-hover:text-neutral-focus ease">Contact Me</span>
          </a>




        </ul>
      </div>
      <div className="navbar-end">
        {/* Resume Button */}
        <a href="#_" className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-red-500 rounded-xl group">
          <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
            <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
          </span>
          <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
          <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">RESUME</span>
        </a>
      </div>
    </div>
  );
}

export default Nav;