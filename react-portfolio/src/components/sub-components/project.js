

export const Work = ({ project, imageURL, description, link }) => {
    return (
        <a className="relative rounded-3xl overflow-hidden w-full md:w-1/3 h-64 mx-auto hover:scale-90 bg-black group"
            href={ link } target={ "_blank" } rel="noreferrer">
            <img
                className="absolute inset-0 object-cover w-full h-full transition-opacity opacity-60  group-hover:opacity-50"
                src={imageURL} alt="screenshot" />
            <div className="relative w-full flex justify-center p-8">

                <p className="absolute px-1 top-28 mx-auto text-2xl font-bold group-hover:opacity-0 text-whitest"> {project}</p>

                <div className="mb-4">
                    <div
                        className="transition-all transform translate-y-8 opacity-0  group-hover:opacity-100 group-hover:translate-y-0">
                        <p className="text-sm font-komet text-whitest">
                            { description }
                        </p>
                    </div>
                </div>
            </div>
        </a>
    )
};

export default Work;