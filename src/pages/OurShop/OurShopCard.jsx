import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";



const OurShopCard = ({item}) => {
    const { name, image, recipe, price, _id } = item;
    const {user} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const axiosSecure = useAxiosSecure()
    const [, refetch] = useCart()

    const handleAddToCart = () => {
      if (user && user.email) {
        
        const cartItem = {
          menuId: _id,
          email: user.email,
          name,
          image,
          price
        }
        axiosSecure.post('/carts', cartItem)
          .then( res => {
            console.log(res.data)
            if (res.data.insertedId) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${name} added to your cart`,
                showConfirmButton: false,
                timer: 1500
              });
              refetch()
            }
          })
      }else{
        Swal.fire({
          title: "You are not logged In?",
          text: "Please login to add to the cart!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, login!"
        }).then((result) => {
          if (result.isConfirmed) {
            navigate('/login', {state: {from: location}})
          }
        });
      }
    }

  return (
    <div className="card w-96 bg-[#F3F3F3]">
      <figure><img src={image} alt="" className="w-full"/></figure>
      <p className="absolute right-0 mr-4 mt-4 px-2 bg-slate-900 text-white">${price}</p>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="text-center mb-6">
            <button onClick={() => handleAddToCart(item)} className="btn btn-outline border-0 border-b-2 btn-warning">add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default OurShopCard;
