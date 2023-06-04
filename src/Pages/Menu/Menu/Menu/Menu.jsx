import { Helmet } from "react-helmet-async";
import Cover from "../../../Shared/Cover/Cover";
import img from '../../../../assets/menu/banner3.jpg';
import dImg from '../../../../assets/menu/dessert-bg.jpeg';
import pImg from '../../../../assets/menu/pizza-bg.jpg';
import sImg from '../../../../assets/menu/salad-bg.jpg';
import supeImg from '../../../../assets/menu/soup-bg.jpg';
import MenuCategory from "../../MenuCategory/MenuCategory";
import useMenu from "../../../../Hooks/useMenu";
import SectionTitle from "../../../../Components/SectionTitle";


const Menu = () => {

    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert')
    const pizzas = menu.filter(item => item.category === 'pizza')
    const soups = menu.filter(item => item.category === 'soup')
    const salads = menu.filter(item => item.category === 'salad')
    const offered = menu.filter(item => item.category === 'offered')
 

    return (
        <div>
            <Helmet>
                <title>Bistro Boss - Menu</title>
            </Helmet>

            <Cover img={img} title='Our Menu'></Cover>
            <SectionTitle subheading="Don't Miss" heading="Today's Offer"></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>

            {/* Desserts */}
            <MenuCategory 
            items={desserts}
            title={'dessert'}
            img={dImg}
            ></MenuCategory>

            {/* Pizzas */}
            <MenuCategory items={pizzas} title={'pizzas'} img={pImg}></MenuCategory>

            {/* Salads */}
            <MenuCategory items={salads} title={'salads'} img={sImg}></MenuCategory>

            {/* Soup */}
            <MenuCategory items={soups} title={'soup'} img={supeImg}></MenuCategory>

        </div>
    );
};

export default Menu;