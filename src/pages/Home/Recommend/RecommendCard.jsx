

const RecommendCard = ({ item }) => {
  const { image, recipe, category } = item;

  return (
    <div>
        <div className="card w-96 bg-[#F3F3F3]">
            <figure>
                <img
                src={image}
                alt=""
                className="w-full"
                />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{category}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                    <button className="btn btn-outline border-0 border-b-2 btn-warning">add to cart</button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default RecommendCard;
