import profilePic from "../assets/SelfPort2.jpg"

export const AboutMe = () => {
    return (
        // <!-- background color for page -->
        <div className="h-full bg-gradient-to-t from-whitest to-dark-slate-gray">
            {/* <!-- page content start --> */}
            {/* <!-- hero --> */}
            <div className="hero min-h-screen bg-transparent">
                <div className="hero-content">
                    <div className="max-w-md lg:max-w-full">

                        <h1 className="text-5xl lg:text-7xl pt-5 lg:pb-5 font-bold text-timberwolf text-center">
                            Let Me Introduce Myself...
                        </h1>

                        <h2 className="pt-2 text-2xl md:pb-8 md:text-4xl font-medium text-space-cadet  text-center">
                            My Name is <span className="text-silver" id="nameSection">Tommy
                                Alvarado</span>
                        </h2>

                        {/* <!-- Portrait Placeholder --> */}
                        <img src={profilePic} className="pt-2 md:pt-0 w-1/2 md:w-1/4 flex mx-auto rounded-3xl" alt="Portrait" />
                        {/* <!-- professional bio --> */}
                        <p
                            className="flex text-xl pt-2 mx-auto text-center sm:px-2 md:pb-6 lg:pb-24 md:text-3xl text-space-cadet">
                            Professionally speaking, I am an experienced
                            Business Analyst
                            based out of Utah who is currently pursuing a full stack development certification in order to further
                            broaden my skills and to continue to establish myself in the technology field. I have worn many hats in
                            the past ranging from a project manager to a leatherworker. Throughout my journey I have found that the
                            most important thing is adaptability and devotion to your craft.
                        </p>

                        {/* <!-- progress bar --> */}
                        <div className=" flex mx-auto justify-center">
                            <ul className="steps steps-vertical lg:steps-horizontal text-space-cadet">
                                <li className="step step-primary">Be Born</li>
                                <li className="step step-primary">Get Into Tech</li>
                                <li className="step">Master Development</li>
                                <li className="step">Rule The World</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}