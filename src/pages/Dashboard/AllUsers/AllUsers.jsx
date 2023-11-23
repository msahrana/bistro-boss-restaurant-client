import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await axiosSecure.get('/users');
      return res.data;
    },
  });

  const handleAdmin = user => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, update it!"
      }).then((result) => {
        if (result.isConfirmed) {
          axiosSecure.patch(`/users/admin/${user._id}`)
          .then(res => {
            if (res.data.modifiedCount > 0) {
                refetch()
                Swal.fire({
                    title: "Updated!",
                    text: "User has been updated successfully.",
                    icon: "success"
                  });
            }
          })
        }
      });
}

  const handleDeleteUser = user => {
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
          axiosSecure.delete(`/users/${user._id}`)
          .then(res => {
            if (res.data.deletedCount > 0) {
                refetch()
                Swal.fire({
                    title: "Deleted!",
                    text: "Your food item has been deleted successfully.",
                    icon: "success"
                  });
            }
          })
        }
      });
}

  return (
    <section>
      <SectionTitle
            subHeading={"---How many??---"}
            heading={'MANAGE ALL USERS'}
       ></SectionTitle>
      <div className="my-4">
        <h2 className="text-3xl">Total Users: {users.length}</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead className=" bg-[#D1A054]">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
                users.map((user, index) => <tr key={user._id}>
                    <th>{index + 1}</th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                    {user.role === 'admin'? 'admin' : <button onClick={() => handleAdmin(user)} className="btn btn-ghost bg-yellow-500"><FaUsers className="text-white text-2xl"></FaUsers> </button>}
                    </td>
                    <td>
                    <button onClick={() => handleDeleteUser(user)} className="btn btn-ghost"><FaTrashAlt className="text-red-500"></FaTrashAlt> </button>
                    </td>
                  </tr>)
            }
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AllUsers;
