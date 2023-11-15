import { useEffect, useState } from "react";
import RecommendCard from "./RecommendCard";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";


const Recommend = () => {

    const [menus, setMenus] = useState([])

    useEffect(() => {
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const recommendItems = data.filter(item => item.category === 'salad')
            setMenus(recommendItems)})
    },[])

    return (
        <section>
            <SectionTitle
            subHeading={'---Should Try---'}
            heading={'CHEF RECOMMENDS'}
            ></SectionTitle>
            <div>
                {
                    menus.slice(0,3).map(item => <RecommendCard key={item._id} item={item}></RecommendCard>)
                }
            </div>
        </section>
    );
};

export default Recommend;