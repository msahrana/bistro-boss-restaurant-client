import OurShopCard from './OurShopCard';

const OurShopTab = ({items}) => {
    return (
        <div className="grid md:grid-cols-3 gap-6 my-10">
                {
                    items.map(item => <OurShopCard
                    key={item._id}
                    item={item}
                    ></OurShopCard>)
                }
           </div>
    );
};

export default OurShopTab;