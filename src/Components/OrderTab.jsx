import RecoCard from "./RecoCard";

const OrderTab = ({items}) => {
    return (
        <div className='grid gird-cols-1 md:grid-cols-3 gap-4'>
            {
                items.map(items => <RecoCard
                    key={items._id}
                    items={items}
                ></RecoCard>)
            }
        </div>
    );
};

export default OrderTab;