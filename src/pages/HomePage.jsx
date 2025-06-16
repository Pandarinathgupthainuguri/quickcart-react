import React, { useContext, useEffect, useState } from 'react'
import AdBannerSlider from '../components/AdBannerSlider'
import ProductCategory from '../components/ProductCategory'
import ProductCategoryGrid from '../components/ProductCategoryGrid'
import Footer from '../components/Footer'
import { ecomContext } from '../context/ContextProVider';

const HomePage = () => {
    const { allData, setAllData } = useContext(ecomContext);

    const [electronicsItm, setElectronicsItm] = useState();
    const [fashionItm, setFashionItm] = useState();
    const [furnitureItm, setFurnitureItm] = useState();

    useEffect(() => {
        // const electronics = allData.filter(elem => elem.category === 'electronics');
        const electronics = {}

        allData.forEach(item => {
            if (item.category === 'electronics') {
                const type = item.itemType;

                if (!electronics[type] || item.price < electronics[type].price) {
                    electronics[type] = item;
                }
            }
        });
        const selectedElectronics = Object.values(electronics);


        // const fashion = allData.filter(elem => elem.category === 'fashion');
        const fashion = {}

        allData.forEach(item => {
            if (item.category === 'fashion') {
                const type = item.itemType;

                if (!fashion[type] || item.price < fashion[type].price) {
                    fashion[type] = item;
                }
            }
        });
        const selectedfashion = Object.values(fashion);


        const furniture = {}

        allData.forEach(item => {
            if (item.category === 'furniture') {
                const type = item.itemType;

                if (!furniture[type] || item.price < furniture[type].price) {
                    furniture[type] = item;
                }
            }
        });
        const selectedFurniture = Object.values(furniture);

        setElectronicsItm(selectedElectronics);
        setFashionItm(selectedfashion)
        setFurnitureItm(selectedFurniture)
    }, [allData])
    // console.log(electronicsItm);


    return (
        <div>
            <AdBannerSlider />
            <ProductCategory filterData={electronicsItm} heading={'Electronics'} />

            <ProductCategory filterData={fashionItm} heading={'Fashion'} />
            <ProductCategoryGrid />
            <ProductCategory filterData={furnitureItm} heading={'Appliances'} />

        </div>
    )
}

export default HomePage