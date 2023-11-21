import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import { FaShoppingCart } from 'react-icons/fa';
import useCart from "../../../hooks/useCart";



const Navbar = () => {
  const { user, logOut } = useContext(AuthContext)
  const [cart] = useCart()

  const handleLogOut = () => {
    logOut()
    .then(() => {})
    .catch(error => console.log(error))
  }

    const navItems = <>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/contactUs'>Contact Us</Link></li>
    {/* <li><Link to='/dashboard'>Dashboard</Link></li> */}
    <li><Link to='/ourMenu'>Our Menu</Link></li>
    <li><Link to='/ourShop/salad'>Our Shop</Link></li>
    <li><Link to='/secret'>Secret</Link></li>
    <li><Link to='/dashboard/cart'>
      <button className="btn btn-sm">
        <FaShoppingCart></FaShoppingCart>
        <div className="badge badge-secondary">+{cart.length}</div>
      </button>
    </Link></li>
    </>

  return (
    <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white max-w-screen-2xl">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Bistro Boss Restaurant</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
            {navItems}
        </ul>
      </div>
      <div className="navbar-end">
    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">  <img src={user?.photoURL}/> </div>  
      </label>
      <div className="bg-red-500 mx-2 p-2 rounded">{user?.displayName}</div>
        {
         user ? 
         <button onClick={handleLogOut} className="btn btn-secondary w-28 h-10">Sign Out</button>
         : <Link to='/login'>
             <button className="btn btn-secondary w-[140px] h-[44px]">Login</button>
           </Link>             
        }
    </div> 
    </div>
  );
};

export default Navbar;
