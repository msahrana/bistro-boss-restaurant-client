import { FaEdit, FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useMenu from "../../../hooks/useMenu";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ManageItems = () => {
    const [ menu, refetch ] = useMenu()
    const axiosSecure = useAxiosSecure()

    const handleDeleteItem = item => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(async(result) => {
        if (result.isConfirmed) {
          const res = await axiosSecure.delete(`/menu/${item._id}`)
          if(res.data.deletedCount > 0){
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${item.name} has been deleted!!!`,
              showConfirmButton: false,
              timer: 1500
            });
          }
        }
      });
    }

  return (
    <section>
      <SectionTitle
        subHeading={"---Hurry Up!---"}
        heading={"MANAGE ALL ITEMS"}
      ></SectionTitle>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead className=" bg-[#D1A054]">
            <tr >
              <th>#</th>
              <th>Image</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
                menu.map((item, index )=> <tr key={item._id}>
                <th>{index + 1}</th>
                <td><img className="w-12 h-12 rounded-full" src={item.image} alt="" /></td>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <td>
                  <Link to={`/dashboard/updateItem/${item._id}`}>
                    <button className="btn btn-md bg-yellow-500"><FaEdit className="text-white text-2xl"></FaEdit> </button>
                  </Link>
                </td>
                <td>
                <button onClick={() => handleDeleteItem(item)} className="btn btn-md"><FaTrashAlt className="text-red-500"></FaTrashAlt> </button>
                </td>
            </tr>)
            }
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ManageItems;
