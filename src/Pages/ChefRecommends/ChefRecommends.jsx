import { useEffect, useState } from "react";
import SectionTitle from "../../Components/SectionTitle";
import RecoCard from "../../Components/RecoCard";

const ChefRecommends = () => {
    const [chefReco, setChefReco] = useState([]);

    useEffect(() => {
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popularItems = data.filter(items => items.category === 'popular')
            setChefReco(popularItems);
            })
    },[])
    return (
        <section>
            <SectionTitle
            subheading={'Should Try'}
            heading={'CHEF RECOMMENDS'}
            ></SectionTitle>

            <div className="grid gird-cols-1 md:grid-cols-3 gap-4">
                {
                    chefReco.map(chefs => <RecoCard
                    key={chefs._id}
                    items={chefs}
                    ></RecoCard>)
                }
            </div>
        </section>
    );
};

export default ChefRecommends;