import OurShopCard from "./OurShopCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from 'swiper/modules';
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';

const OurShopTab = ({ items }) => {
  return (
    <div>
      
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className="grid md:grid-cols-3 gap-6 my-10">
            {
                items.map((item) => <OurShopCard 
                    key={item._id} 
                    item={item}
                ></OurShopCard>)
            }
        </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default OurShopTab;
