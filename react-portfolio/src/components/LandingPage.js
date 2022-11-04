import AutoTyping from "../utils/autotyping"

const LandingPage = () => {
    return (
        // < !--background color for page-- >
        <div className="h-screen bg-gradient-to-t from-white to-stone-500 dark:from-slate-700 dark:to-slate-800">
            {/* <!-- header --> */}

            {/* <!-- About Me --> */}
            <div className="flex h-screen">
                <div className="m-auto">
                    <div className="mx-auto text-center prose">
                        <div className="container">
                            <img src="" alt="avatar photo" className="object-cover mx-auto h-36 w-36 rounded-full"
                                id="avatarPhoto" />
                            <h1 className="text-4xl font-bold pt-4 px-10 text-slate-600 dark:text-stone-300">Tommy Alvarado</h1>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;