

export const Footer = () => {
    return (
        <footer className="bg-white dark:bg-slate-700">
            <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 lg:px-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div className="flex justify-center text-teal-600 sm:justify-start">
                        {/* <img src="../assets/img/tom-a logo.png" class="invisible md:visible md:w-12" alt=""> */}
                    </div>
                    <p className="mt-4 text-sm text-center text-gray-500 lg:text-right lg:mt-0 dark:text-white">
                        Tommy Alvarado &copy; 2022. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}