
const MenuItem = ({item}) => {
    const {name, image, price, recipe} = item;
    return (
        <div className="flex space-x-3">
            <img style={{borderRadius:'0 200px 200px 200px'}} className="w-20" src={image} alt="" />
            <div>
                <h4 className="uppercase">{name}--------------</h4>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-500">{price}</p>
        </div>
    );
};

export default MenuItem;