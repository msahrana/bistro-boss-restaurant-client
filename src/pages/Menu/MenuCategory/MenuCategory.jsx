import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const MenuCategory = ({items, title, img}) => {

    return (
        <div>
            {title && <Cover img={img} title={title}></Cover>}
            <div className="grid md:grid-cols-2 gap-10 my-12">
                {
                    items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <Link to={`/ourShop/${title}`}>
            <div className="text-center mb-6">
                <button className="btn btn-outline border-0 border-b-2 btn-warning">ORDER YOUR FAVOURITE FOOD</button>
            </div>
            </Link>
        </div>
    );
};

export default MenuCategory;