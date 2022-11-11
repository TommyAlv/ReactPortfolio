import React from 'react';
import Typed from "react-typed";
import logo from "../assets/tom-alogo.png"


const textLines = [
    `Full Stack Developer`,
    `Business Analyst`,
    `Project Manager`,
];

const LandingPage = () => {
    return (
        // < !--background color for page-- >
        <div className="h-screen bg-gradient-to-t from-whitest to-dark-slate-gray">
            {/* <!-- header --> */}

            {/* <!-- About Me --> */}
            <div className="flex h-screen">
                <div className="m-auto">
                    <div className="mx-auto text-center prose">
                        <div className="container mx-auto my-auto">
                            <img src={logo} alt="avatar" className="object-cover mx-auto h-36 w-36 rounded-full"
                                id="avatarPhoto" />

                            <h1 className="text-4xl font-bold pt-4 px-10 my-3 text-space-cadet ">Tommy Alvarado</h1>
                            <p className="pt-2 lg:pt-1 md:pt-2 lg:pb-2 sm:pb-9 md:px-4 sm:text-4xl text-3xl font-semibold text-deep-jungle-green "
                                id="textRow">
                                <Typed strings={textLines} startDelay={300} typeSpeed={60} backSpeed={100} backDelay={100} smartBackspace={true} loop={true} />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;