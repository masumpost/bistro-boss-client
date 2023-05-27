import SectionTitle from "../../../../Components/SectionTitle";
import fImg from '../../../../assets/home/featured.jpg'
import './Featured.css'
const Featured = () => {
    return (
        <div className="my-12 featuredItem text-white pt-8 bg-fixed">
            <SectionTitle
            subheading='Check it Out'
            heading='FROM OUR MENU'
            ></SectionTitle>
            <div className="flex justify-center items-center gap-5 py-20 px-36">
                <div>
                    <img src={fImg} alt="" />
                </div>
                <div className="space-y-4">
                    <p>Aug, 20, 2026</p>
                    <p className="uppercase">Where i can get some?</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit harum necessitatibus numquam. Natus praesentium eaque cumque. Sint ea, quas possimus neque quod tempore. Magnam veritatis quam et aut aliquid accusamus.</p>
                    <button className="btn btn-outline border-0 border-b-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;