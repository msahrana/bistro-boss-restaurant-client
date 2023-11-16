

const OurShopCard = ({item}) => {
    const { name, image, recipe, price } = item;

  return (
    <div className="card w-96 bg-[#F3F3F3]">
      <figure><img src={image} alt="" className="w-full"/></figure>
      <p className="absolute right-0 mr-4 mt-4 px-2 bg-slate-900 text-white">${price}</p>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="text-center mb-6">
            <button className="btn btn-outline border-0 border-b-2 btn-warning">add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default OurShopCard;
