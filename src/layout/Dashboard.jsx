import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaShip, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";


const Dashboard = () => {

    const [cart] = useCart()

    const [isAdmin] = useAdmin()

    return (
        <div className="flex bg-[#F6F6F6]">
            <div className="w-64 min-h-screen bg-[#D1A054]">
                <div className="text-center my-8">
                    <h1 className="text-3xl font-bold">BISTRO BOSS</h1>
                    <h1 className="text-xl font-semibold uppercase">Restaurant</h1>
                </div>
                <ul className="menu p-4">
                    {
                        isAdmin ? <>
                    <li><NavLink to="/dashboard/adminHome"> <FaHome></FaHome>Admin Home</NavLink></li>
                    <li><NavLink to="/dashboard/addItems"><FaUtensils></FaUtensils>Add Items</NavLink></li>
                    <li><NavLink to="/dashboard/manageItems"><FaList></FaList>Manage Items</NavLink></li>
                    <li><NavLink to="/dashboard/bookings"><FaBook></FaBook>Manage Bookings</NavLink></li>
                    <li><NavLink to="/dashboard/users"><FaUsers></FaUsers>All Users</NavLink></li>
                        </> : <>
                    <li><NavLink to="/dashboard/userHome"> <FaHome></FaHome>User Home</NavLink></li>
                    <li><NavLink to="/dashboard/reservation"><FaCalendar></FaCalendar>Reservation</NavLink></li>
                    <li><NavLink to="/dashboard/cart"> <FaShoppingCart></FaShoppingCart>My Cart ({cart.length})</NavLink></li>
                    <li><NavLink to="/dashboard/review"><FaAd></FaAd>Add a Review</NavLink></li>
                    <li><NavLink to="/dashboard/bookings"> <FaList></FaList>My Bookings</NavLink></li>
                    <li><NavLink to="/dashboard/paymentHistory"> <FaShoppingCart></FaShoppingCart>Payment History</NavLink></li>
                        </>
                    }
                    <div className="divider"></div>
                    <li><NavLink to="/"> <FaHome></FaHome>Home</NavLink></li>
                    <li><NavLink to="/ourMenu"> <FaList></FaList>Our Menu</NavLink></li>
                    <li><NavLink to="/ourShop/salad"> <FaShip></FaShip> Our Shop</NavLink></li>
                    <li><NavLink to="/contactUs"> <FaEnvelope></FaEnvelope> Contact</NavLink></li>
                </ul>
            </div>
            <div className="flex-1 p-8 mx-24 bg-[#FFF]">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;