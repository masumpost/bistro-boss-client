import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, FaBars, FaShoppingBag, FaEnvelope } from "react-icons/fa";
import useCart from "../Hooks/useCart";

const Dashboard = () => {
    const [cart] = useCart();
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side bg-[#D1A054]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full text-base-content">
                    {/* Sidebar content here */}
                    <li><NavLink to='/dashboard/home'><FaHome></FaHome> User Home</NavLink></li>
                    <li><NavLink to='/dashboard/reservations'><FaCalendarAlt></FaCalendarAlt> Reservations</NavLink></li>
                    <li><NavLink to='/dashboard/history'><FaWallet></FaWallet> Payment History</NavLink></li>
                    <li><NavLink to='/dashboard/mycart'><FaShoppingCart></FaShoppingCart> My Cart
                    <small className="bg-red-700 text-white badge badge-primary badge-md font-bold">+{cart?.length || 0}</small>
                    </NavLink></li>
                    <div className="divider"></div>
                    <li><NavLink to='/'><FaHome></FaHome> Home</NavLink></li>
                    <li><NavLink to='/menu'><FaBars></FaBars> Menu</NavLink></li>
                    <li><NavLink to='/'><FaShoppingBag></FaShoppingBag> Shop</NavLink></li>
                    <li><NavLink to='/'><FaEnvelope></FaEnvelope> Contact</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;