import React, { useContext, useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router';
import { ecomContext } from '../context/ContextProVider';
import RelatedItemRight from '../others/RelatedItemRight';
import Filters from '../others/Filters';

const RelatedItemList = () => {
    const { allData, relatedItem, setRelatedItem } = useContext(ecomContext);


    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        if (!allData.length) return;

        const currentItem = allData.find(elem => elem.id == params.itemId);

        if (currentItem) {
            const filterByType = allData.filter(type => type.itemType === currentItem.itemType);

            setRelatedItem(filterByType);
        } else {
            const navListItem = allData.filter(elem => elem.itemType === params.itemId || elem.category === params.itemId || elem.gender === params.itemId);
            setRelatedItem(navListItem)
        }
        window.scrollTo(0, 0);

    }, [params.itemId, allData])


    // console.log(relatedItem);



    // navigate to item detail page
    const handleClick = (itemId) => {
        navigate(`/detailPage/${itemId}`)

    }


    return (
        <div className='relatedItemContainer d-flex mt-5 mx-lg-5 px-lg-5 pt-2'>
            <div className="filterBar p-2" style={{
                backgroundColor: '', height: '600px'
                , flex: '20%',
            }}>

                <Filters relatedItem={relatedItem} setRelatedItem={setRelatedItem} />
            </div>


            <RelatedItemRight relatedItem={relatedItem} handleClick={handleClick} />
        </div >
    )
}

export default RelatedItemList