import logo from "../assets/tom-alogo.png"
import React, { useEffect } from 'react';
import Typed from "react-typed";

const textLines = [
    `Full Stack Developer`,
    `Business Analyst`,
    `Project Manager`,
];


const LandingPage = () => {
    return (
        // < !--background color for page-- >
        <div className="h-screen bg-gradient-to-t from-white to-stone-500">
            {/* <!-- header --> */}

            {/* <!-- About Me --> */}
            <div className="flex h-screen">
                <div className="m-auto">
                    <div className="mx-auto text-center prose">
                        <div className="container">
                            <h1 className="text-4xl font-bold pt-4 px-10 text-slate-600 ">Tommy Alvarado</h1>
                            <p className="pt-6 lg:pt-3 md:pt-2 lg:pb-4 sm:pb-9 md:px-4 sm:text-4xl text-3xl font-semibold text-indigo-800 "
                                id="textRow">
                                <Typed strings={textLines} startDelay={300} typeSpeed={60} backSpeed={100} backDelay={100} smartBackspace={true} loop={true} />
                            </p>
                            {/* <!-- menu button  --> */}
                            <div className="dropdown mt-4">
                                <div tabindex="0"
                                    className="m-1 btn text-slate-300 bg-indigo-800 hover:bg-indigo-400 text-2xl mx-auto"
                                    id="menuButton"><span className="mx-auto my-auto">Where To Begin...</span></div>
                                <div className="hidden menu items-center text-center container w-full" id="mobileMenu">
                                    <ul className="bg-slate-300 shadow-lg shadow-indigo-800 bg-opacity-30 w-full items-center text-center justify-center">
                                        <li
                                            className="text-2xl sm:text-lg text-indigo-800 items-center hover:bg-slate-300 hover:bg-opacity-50 hover:text-white"
                                            id="hLink">
                                            <a href="./assets/html/aboutme.html">Get To Know Me</a>
                                        </li>
                                        <li
                                            className="text-2xl sm:text-lg text-indigo-800  items-center hover:bg-slate-300 hover:bg-opacity-50 hover:text-white"
                                            id="hLink">
                                            <a href='./assets/html/projects.html' className="item-center text-center">See My Work</a>
                                        </li>
                                        <li
                                            className="text-2xl sm:text-lg text-indigo-800 items-center hover:bg-slate-300 hover:bg-opacity-50 hover:text-white"
                                            id="hLink">
                                            <a href="./assets/html/contact.html">Reach Out</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;