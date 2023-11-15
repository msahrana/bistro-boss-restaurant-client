import Banner from "../Banner/Banner";
// import BistroBoss from "../BistroBoss/BistroBoss";
import Order from "../Order/Order";
import Phone from "../Phone/Phone";
import PopularMenuOne from "../PopularMenu/PopularMenuOne";
import Recommend from "../Recommend/Recommend";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Order></Order>
            {/* <BistroBoss></BistroBoss> */}
            <PopularMenuOne></PopularMenuOne>
            <Phone></Phone>
            <Recommend></Recommend>
        </div>
    );
};

export default Home;