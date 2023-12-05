import { Link } from "react-router-dom";
import useCart from "../../../hooks/useCart";
import CartCard from "./CartCard";

const Cart = () => {
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      <div className="flex justify-evenly mb-8">
        <h2 className="text=4xl font-bold">Total Orders: {cart.length}</h2>
        <h2 className="text=4xl font-bold">Total Price: ${totalPrice}</h2>
        {cart.length ? <Link to='/dashboard/payment'> 
          <button className="btn bg-[#D1A054] btn-sm">Pay</button>
        </Link>
          :
          <button disabled className="btn bg-[#D1A054] btn-sm">Pay</button>
        }
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full ">
          {/* head */}
          <thead className=" bg-[#D1A054]">
            <tr >
              <th>#</th>
              <th>ITEM IMAGE</th>
              <th>ITEM NAME</th>
              <th>PRICE</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {
                cart.map((item, index) => <CartCard key={item._id} item={item} index={index} refetch={refetch}></CartCard>)
            }
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
