import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import image from '../../../assets/home/featured.jpg'


const PopularMenuTwo = () => {
    return (
        <section className="bg-[url(/featured.jpg)] bg-fixed text-white px-20 py-10 my-20">
            <SectionTitle
            subHeading={'---Check it out---'}
            heading={'OUR POPULAR MENU'}
            ></SectionTitle>
            <div className="md:flex justify-center items-center py-8 px-16 bg-slate-500 bg-opacity-10">
                <div>
                    <img className="w-[600px] h-[400px]" src={image} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Nov 15, 2023</p>
                    <h2 className="uppercase my-2">Where can i get some?</h2>
                    <p className="text-justify mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error <br />
                    voluptate facere, deserunt dolores maiores quod nobis quas <br /> quasi. 
                    Eaque repellat recusandae ad laudantium tempore <br /> consequatur consequuntur 
                    omnis ullam maxime tenetur.</p>
                    <button className="btn btn-outline border-0 border-b-2 text-red-500">Read More</button>
                </div>
            </div>
        </section>
    );
};

export default PopularMenuTwo;