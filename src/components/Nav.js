import logo from "../assets/tom-alogo.png"
import myResume from "../assets/myResume.pdf"



const Nav = ({ setCurrentPage }) => {
  return (
    <div className="navbar bg-dark-slate-gray mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="black">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          {/* Mobile Menu */}
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-english-violet rounded-box w-52">
            <li>
              <a onClick={() => setCurrentPage("AboutMe")} href="#AboutMe" className="text-timberwolf">
                About Me
              </a>
            </li>

            <li>
              <a onClick={() => setCurrentPage("Work")} href="#Work" className="text-timberwolf">Work</a>
            </li>

            <li>
              <a onClick={() => setCurrentPage("Contact")} href="#Contact" className="text-timberwolf">Contact Me</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl" onClick={() => setCurrentPage("")} href="#">
          <img src={logo} alt="logo" className="object-cover mx-auto h-12 w-12 rounded-full"
            id="avatarPhoto" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">

          {/* About Me Button */}
          <a onClick={() => setCurrentPage("AboutMe")} href="#AboutMe" className="relative px-5 py-3 mx-2 overflow-hidden font-medium text-timberwolf bg-english-violet rounded-lg shadow-inner group">
            <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2  group-hover:w-full ease"></span>
            <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2  group-hover:w-full ease"></span>
            <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-300 bg-transparent group-hover:h-full ease"></span>
            <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-300 bg-transparent group-hover:h-full ease"></span>
            <span className="absolute inset-0 w-full h-full duration-300 delay-100 bg-dark-electric-blue opacity-0 group-hover:opacity-100"></span>
            <span className="relative transition-colors duration-300 delay-300 group-hover:text-space-cadet ease">About Me</span>
          </a>
          {/* Work Button */}
          <a onClick={() => setCurrentPage("Work")} href="#Work" className="relative px-5 py-3 mx-2 overflow-hidden font-medium text-timberwolf bg-english-violet rounded-lg shadow-inner group">
            <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2  group-hover:w-full ease"></span>
            <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2  group-hover:w-full ease"></span>
            <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-300 bg-transparent group-hover:h-full ease"></span>
            <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-300 bg-transparent group-hover:h-full ease"></span>
            <span className="absolute inset-0 w-full h-full duration-300 delay-100 bg-dark-electric-blue opacity-0 group-hover:opacity-100"></span>
            <span className="relative transition-colors duration-300 delay-300 group-hover:text-space-cadet ease">Work</span>
          </a>
          {/* Contact Button */}
          <a onClick={() => setCurrentPage("Contact")} href="#Contact" className="relative px-5 py-3 ml-2 mr-8 overflow-hidden font-medium text-timberwolf bg-english-violet rounded-lg shadow-inner group">
            <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2  group-hover:w-full ease"></span>
            <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2  group-hover:w-full ease"></span>
            <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-300 bg-transparent group-hover:h-full ease"></span>
            <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-300 bg-transparent group-hover:h-full ease"></span>
            <span className="absolute inset-0 w-full h-full duration-300 delay-100 bg-dark-electric-blue opacity-0 group-hover:opacity-100"></span>
            <span className="relative transition-colors duration-300 delay-300 group-hover:text-space-cadet ease">Contact</span>
          </a>



        </ul>
      </div>
      <div className="navbar-end">
        {/* Resume Button */}
        {/* <a href={myResume} target={"_blank"} rel="noreferrer" className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-red-500 rounded-xl group">
          <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
            <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
          </span>
          <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
          <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">RESUME</span>
        </a> */}
      </div>
    </div>
  );
}

export default Nav;