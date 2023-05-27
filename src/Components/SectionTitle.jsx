const SectionTitle = ({heading, subheading}) => {
    return (
        <div className="w-4/12 mx-auto text-center my-5">
            <p className="mb-2 text-yellow-600 italic">--- {subheading} ---</p>
            <h3 className="text-3xl font-semibold border-y-4 py-3 uppercase">{heading}</h3>
        </div>
    );
};

export default SectionTitle;