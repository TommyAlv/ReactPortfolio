

export const AboutMe = () => {
    return (
        // <!-- background color for page -->
        <div className="h-screen bg-gradient-to-t from-white to-stone-500 dark:from-slate-700 dark:to-slate-800">
            {/* <!-- page content start --> */}
            {/* <!-- hero --> */}
            <div className="hero min-h-screen bg-transparent">
                <div className="hero-content">
                    <div className="max-w-md lg:max-w-full">
                        <h1 className="text-5xl lg:text-7xl pt-5 lg:pb-5 font-bold text-slate-900 dark:text-stone-500 text-center">Let Me
                            Introduce Myself...
                        </h1>Name
                        <h2 className="pt-4 text-2xl md:pb-8 md:text-4xl font-medium text-slate-800 dark:text-stone-200 text-center">
                            My Name is <span className="text-indigo-700 dark:text-indigo-200" id="nameSection">Tommy
                                Alvarado</span></h2>

                        {/* <!-- Portrait Placeholder --> */}
                        <img src="../img/SelfPort2.jpg" className="pt-4 md:pt-0 w-1/2 md:w-1/4 flex mx-auto rounded-3xl" alt="Portrait" />
                        {/* <!-- professional bio --> */}
                        <p
                            className="flex text-xl pt-4 pb-10 mx-auto text-center sm:px-2 md:pb-12 lg:pb-24 md:text-3xl text-slate-800 dark:text-stone-200">
                            Professionally speaking, I am an experienced
                            Business Analyst
                            based out of Utah who is currently pursuing a full stack development certification in order to further
                            broaden my skills and to continue to establish myself in the technology field. I have worn many hats in
                            the past ranging from a project manager to a leatherworker. Throughout my journey I have found that the
                            most important thing is adaptability and devotion to your craft.
                        </p>

                        {/* <!-- progress bar --> */}
                        <div className="pb-5 lg:pb-0 flex mx-auto justify-center">
                            <ul className="steps steps-vertical lg:steps-horizontal">
                                <li className="step step-primary dark:text-stone-200">Be Born</li>
                                <li className="step step-primary dark:text-stone-200">Get Into Tech</li>
                                <li className="step dark:text-stone-200">Master Development</li>
                                <li className="step dark:text-stone-200">Rule The World</li>
                            </ul>
                        </div>

                        {/* <!-- Additional Things To Add to About Me --> */}
                        <div className="pt-5 lg:pt-0">
                        </div>

                    </div>
                </div>
            </div>
        </div>

    );
}