import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";


const PopularMenuOne = () => {

    const [menu] = useMenu()
    const popular = menu.filter(item => item.category === 'popular')

    return (
        <section>
            <SectionTitle
            subHeading={'---Check it out---'}
            heading={'OUR POPULAR MENU'}
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10 my-12">
                {
                    popular.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className="text-center">
                <button className="btn btn-outline border-0 border-b-2 btn-warning">View Full  Menu</button>
            </div>
        </section>
    );
};

export default PopularMenuOne;