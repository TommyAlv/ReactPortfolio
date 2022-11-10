import React from 'react';
import Typed from "react-typed";


const textLines = [
    `Full Stack Developer`,
    `Business Analyst`,
    `Project Manager`,
];

const LandingPage = () => {
    return (
        // < !--background color for page-- >
        <div className="h-screen bg-gradient-to-t from-secondary to-primary">
            {/* <!-- header --> */}

            {/* <!-- About Me --> */}
            <div className="flex h-screen">
                <div className="m-auto">
                    <div className="mx-auto text-center prose">
                        <div className="container mx-auto my-auto">

                            
                            <h1 className="text-4xl font-bold pt-4 px-10 text-primary-content ">Tommy Alvarado</h1>
                            <p className="pt-6 lg:pt-3 md:pt-2 lg:pb-4 sm:pb-9 md:px-4 sm:text-4xl text-3xl font-semibold text-secondary-content "
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