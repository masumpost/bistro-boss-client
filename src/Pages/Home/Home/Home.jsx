import { Helmet } from "react-helmet-async";
import ChefRecommends from "../../ChefRecommends/ChefRecommends";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ChefService from "../ChefService/ChefService";
import Number from "../Number/Number";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";
import Featured from "./Featured/Featured";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss - Home</title>
            </Helmet>
           <Banner></Banner>
           <Category></Category>
           <ChefService></ChefService>
           <PopularMenu></PopularMenu>
           <Number></Number>
           <ChefRecommends></ChefRecommends>
           <Featured></Featured>
           <Testimonials></Testimonials>
        </div>
    );
};

export default Home;