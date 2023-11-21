import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const CartCard = ({ item, index, refetch }) => {
    const axiosSecure = useAxiosSecure()

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              axiosSecure.delete(`/carts/${id}`)
              .then(res => {
                if (res.data.deletedCount) {
                    refetch()
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your food item has been deleted.",
                        icon: "success"
                      });
                }
              })
            }
          });
    }
    
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask rounded-full w-10 h-10">
              <img src={item.image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
      </td>
      <td>{item.name}</td>
      <td>${item.price}</td>
      <th>
        <button onClick={() => handleDelete(item._id)} className="btn btn-ghost"><FaTrashAlt className="text-red-500"></FaTrashAlt> </button>
      </th>
    </tr>
  );
};

export default CartCard;
