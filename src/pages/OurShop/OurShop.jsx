import { useState } from "react";
import shopImg from "../../assets/shop/banner2.jpg";
import Cover from "../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../hooks/useMenu";
import OurShopTab from "./OurShopTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const OurShop = () => {
    <Helmet>
        <title>Bistro Boss | Our Shop </title>
      </Helmet>
    const categories = ["salad", "pizza", "soup", "dessert", "drinks"]
    const {category} = useParams()
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex)
    const [menu] = useMenu()

    const salad = menu.filter(item => item.category === "salad")
    const pizza = menu.filter(item => item.category === "pizza")
    const soup = menu.filter(item => item.category === "soup")
    const dessert = menu.filter(item => item.category === "dessert")
    const drinks = menu.filter(item => item.category === "drinks")

  return (
    <div>
      <Cover img={shopImg} title="OUR SHOP"></Cover>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soups</Tab>
          <Tab>Desserts</Tab>
          <Tab>drinks</Tab>
        </TabList>
        <TabPanel>
           <OurShopTab items={salad}></OurShopTab>
        </TabPanel>
        <TabPanel>
            <OurShopTab items={pizza}></OurShopTab>
        </TabPanel>
        <TabPanel>
            <OurShopTab items={soup}></OurShopTab>
        </TabPanel>
        <TabPanel>
            <OurShopTab items={dessert}></OurShopTab>
        </TabPanel>
        <TabPanel>
            <OurShopTab items={drinks}></OurShopTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default OurShop;
