import codeQuiz from "../assets/codeQuiz.png"
import crowdCntrl from "../assets/crowdCntrl.png"
import passwordGen from "../assets/passwordGen.png"
import weatherApp from "../assets/weatherApp.png"
import workdayScheduler from "../assets/workdayScheduler.png"
import YCEV from "../assets/YCEV.png"
import { Work } from "./sub-components/project.js"


export const Works = () => {
    return (

        <div className="h-full bg-gradient-to-t from-whitest to-dark-slate-gray">
            <div className="hero min-h-screen bg-transparent">
                <div className="hero-content text-center">
                    <div className="pt-10 lg:pt-0 w-full sm:px-4">
                        <h1 className="text-5xl font-bold text-timberwolf">It May Not Be Much, But It's Honest.
                        </h1>
                        <h2 className="pt-8 pb-4 text-3xl font-semibold xl:pb-16 text-space-cadet">Below are a few projects that I
                            have created or assisted in creating.</h2>
                        <p className="text-xl pt-6 pb-10 hidden lg:block text-space-cadet">
                            Hover To Learn More. Clicking Will Take You To The Deployed Site
                        </p>
                        <div className="container mx-auto lg:w-full bg-transparent">
                            <div className="flex flex-col mx-auto lg:flex-row space-y-3 lg:space-y-0 lg:space-x-3">
                                {/* Projects Below */}
                                <Work
                                    project={'Crowd CNTRL'}
                                    imageURL={crowdCntrl}
                                    description={'My first Heroku deployment, and full stack project that utilized MYSQL and Passport for authorization.'}
                                    link={'https://crowdcntrl.herokuapp.com/'} />
                                <Work
                                    project={'Your Corner EV'}
                                    imageURL={YCEV}
                                    description={'A website for users who are looking for alternative fueling stations near them or near a particular location.'}
                                    link={'https://kurohyou-studios.github.io/your-corner-ev/'} />
                                <Work
                                    project={'Workday Scheduler'}
                                    imageURL={workdayScheduler}
                                    description={'An editable 5 day work week task list made to help individuals keep track of their day today agenda.'}
                                    link={'https://tommyalv.github.io/Challenge5-WorkdaySch/'} />
                                <Work
                                    project={'Code Quiz'}
                                    imageURL={codeQuiz}
                                    description={'A coding quiz made to test your knowledge. It includes a timer and a penalty while utilizing local storage to keep high scores!'}
                                    link={'https://tommyalv.github.io/Challenge4-CodeQuiz/'} />
                                <Work
                                    project={'Weather App'}
                                    imageURL={weatherApp}
                                    description={'A weather dashboard that allows users to find the current weather and the 5 day forecast for any city.'}
                                    link={'https://tommyalv.github.io/Challenge6-WeatherApp/'} />
                                <Work
                                    project={'Password Generator'}
                                    imageURL={passwordGen}
                                    description={'A password generator with options to add characters and numbers if the user would like to.'}
                                    link={'https://tommyalv.github.io/jsPasswordGenerator/'} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Works;