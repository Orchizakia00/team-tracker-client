

const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="mx-auto md:w-4/12 text-center my-8 w-fit">
            <h3 className="text-4xl font-bold border-b-2 py-4">{heading}</h3>
            <p className="text-blue-600 font-semibold my-2">{subHeading}</p>
        </div>
    );
};

export default SectionTitle;