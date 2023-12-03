import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const UpdateItem = () => {
  const { register, handleSubmit, reset } = useForm();
  const { name, category, recipe, price, _id } = useLoaderData()
  const axiosPublic = useAxiosPublic()
  const axiosSecure = useAxiosSecure()

  const onSubmit = async(data) => {
    console.log(data);
    const imageFile = {image: data.image[0]}
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        'content-type' : 'multipart/form-data'
      }
    })
    if(res.data.success){
      const menuItem = {
        name: data.name,
        category: data.category,
        recipe: data.recipe,
        price: parseFloat(data.price),
        image: res.data.data.display_url
      }
      const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem)
      console.log(menuRes.data)
      if(menuRes.data.modifiedCount > 0){
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} is updated to the menu`,
          showConfirmButton: false,
          timer: 1500
        });
      }
    }
  };

  return (
    <section>
      <SectionTitle
        heading={"UPDATE ITEM"}
      ></SectionTitle>
      <div className="px-24">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text font-bold">Recipe Name*</span>
            </label>
            <input
              type="text" 
              defaultValue={name}
              placeholder="Recipe Name"
              {...register("name", {required: true})}
              className="input input-bordered w-full"
            />
          </div>
          <div className="flex gap-6 my-6">
            {/* Category section */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold">Category*</span>
              </label>
              <select defaultValue={category}
                {...register("category", {required: true})}
                className="select select-bordered w-full">
                <option disabled value={'default'}>Select a Category</option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soups</option>
                <option value="dessert">Desserts</option>
                <option value="drinks">Drinks</option>
              </select>
            </div>
            {/* price section */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold">Price*</span>
              </label>
              <input
                type="number" defaultValue={price}
                placeholder="Price"
                {...register("price", {required: true})}
                className="input input-bordered w-full"
              />
            </div>
          </div>
          {/* recipe details */}
          <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Recipe Details</span>
              </label>
              <textarea defaultValue={recipe}
                {...register("recipe", {required: true})}
                className="textarea textarea-bordered h-24"
                placeholder="Recipe Details"
              ></textarea>
            </div>
            <div className="form-control w-full my-6">
            <input {...register("image", {required: true})} type="file" className="file-input file-input-bordered file-input-primary w-full max-w-xs" />
            </div>
          <button className="btn bg-[#835D23] btn-sm text-white">Update Menu Item</button>
        </form>
      </div>
    </section>
  );
};

export default UpdateItem;
