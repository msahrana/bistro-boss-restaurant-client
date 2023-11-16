import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import BistroBoss from "../BistroBoss/BistroBoss";
import Order from "../Order/Order";
import Phone from "../Phone/Phone";
import PopularMenuOne from "../PopularMenu/PopularMenuOne";
import PopularMenuTwo from "../PopularMenu/PopularMenuTwo";
import Recommend from "../Recommend/Recommend";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner></Banner>
      <Order></Order>
      <BistroBoss></BistroBoss>
      <PopularMenuOne></PopularMenuOne>
      <Phone></Phone>
      <Recommend></Recommend>
      <PopularMenuTwo></PopularMenuTwo>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
