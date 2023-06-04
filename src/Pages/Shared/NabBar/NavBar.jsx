import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaShoppingCart } from 'react-icons/fa';
import useCart from "../../../Hooks/useCart";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCart();


    const handelLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const navOptions = <>

        <li><Link to='/'>HOME</Link></li>
        <li><Link to='/menu'>MENU</Link></li>
        <li><Link to='/order/salad'>ORDER</Link></li>
        <li><Link to='/dashboard/mycart'>

            <div className="flex relative">
                <div className="bg-green-600 rounded-full p-2">
                <FaShoppingCart className=""></FaShoppingCart>
                </div>
                <small className="bg-red-700 text-black badge badge-primary badge-md font-bold absolute -bottom-3 -right-0">{cart?.length || 0}</small>
            </div>
        </Link></li>
        {
            user ? <>
                <span>{user?.displayName}</span>
                <button onClick={handelLogOut} className="btn btn-ghost">LogOut</button>
            </> : <>
                <li><Link to='/login'>LOGIN</Link></li>
            </>
        }
    </>

    return (
        <>
            <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl text-white bg-black">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Bistro Boss</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Get started</a>
                </div>
            </div>
        </>
    );
};

export default NavBar;