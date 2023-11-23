import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";

const AddItems = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section>
      <SectionTitle
        subHeading={"---What's new?---"}
        heading={"ADD AN ITEM"}
      ></SectionTitle>
      <div className="px-24">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text font-bold">Recipe Name*</span>
            </label>
            <input
              type="text"
              placeholder="Recipe Name"
              {...register("name", {required: true})}
              className="input input-bordered w-full"
            />
          </div>
          <div className="flex gap-6 my-6">
            {/* Category */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold">Category*</span>
              </label>
              <select defaultValue={'default'}
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
            {/* Category */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold">Price*</span>
              </label>
              <input
                type="number"
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
              <textarea 
                {...register("recipe", {required: true})}
                className="textarea textarea-bordered h-24"
                placeholder="Recipe Details"
              ></textarea>
            </div>
            <div className="form-control w-full my-6">
            <input {...register("image", {required: true})} type="file" className="file-input file-input-bordered file-input-primary w-full max-w-xs" />
            </div>
          <button className="btn bg-[#835D23] btn-sm text-white">Add Item<FaUtensils></FaUtensils></button>
        </form>
      </div>
    </section>
  );
};

export default AddItems;
