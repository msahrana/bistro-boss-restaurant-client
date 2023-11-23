

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="mx-auto text-center mt-6 mb-5 md:w-5/12">
            <p className="text-yellow-400 font-semibold pb-2">{subHeading}</p>
            <h2 className="text-3xl font-semibold border-y-4 py-4">{heading}</h2>
        </div>
    );
};

export default SectionTitle;