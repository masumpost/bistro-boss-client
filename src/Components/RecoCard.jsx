
const RecoCard = ({chefs}) => {

    const {image, recipe, name} = chefs;

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="chefsReco" /></figure>
                <div className="card-body items-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions mt-4">
                      <button className="btn btn-outline border-0 border-b-4">Add To Card</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecoCard;