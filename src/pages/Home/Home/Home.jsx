import Banner from "../Banner/Banner";
import BistroBoss from "../BistroBoss/BistroBoss";
import Order from "../Order/Order";
import Phone from "../Phone/Phone";
import PopularMenuOne from "../PopularMenu/PopularMenuOne";
import PopularMenuTwo from "../PopularMenu/PopularMenuTwo";
import Recommend from "../Recommend/Recommend";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Order></Order>
            <BistroBoss></BistroBoss>
            <PopularMenuOne></PopularMenuOne>
            <Phone></Phone>
            <Recommend></Recommend>
            <PopularMenuTwo></PopularMenuTwo>
        </div>
    );
};

export default Home;