

const RecommendCard = ({ item }) => {
  const { image, recipe, category } = item;

  return (
    <div className="flex">
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img
                src={image}
                alt="Shoes"
                className="w-full"
                />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{category}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                    <button className="btn btn-outline btn-warning">add to cart</button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default RecommendCard;
