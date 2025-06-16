import React, { useContext, useEffect, useState } from 'react'
import Paper from '@mui/material/Paper';
import { ecomContext } from '../context/ContextProVider';
import { useNavigate } from 'react-router';

const ColGrid = ({ heading }) => {
    const { allData } = useContext(ecomContext);

    const navigate = useNavigate();

    const [suggestedItem, setSuggestedItem] = useState(null);

    useEffect(() => {
        if (!allData.length) return;

        const randomValue = Math.floor(Math.random() * (50 - 1)) + 1;

        const getLocalStoreId = JSON.parse(localStorage.getItem('setSuggestedKey')) ?? randomValue;

        const filterById = allData.find(elem => elem.id === getLocalStoreId);

        if (filterById) {
            const filterData = allData.filter(elem => elem.itemType === filterById.itemType);
            localStorage.setItem('storeSuggestedItem', JSON.stringify(filterData));

        }
        const getItem = JSON.parse(localStorage.getItem('storeSuggestedItem'));


        let randomNo1;
        let randomNo2;

        if (getItem.length < 3) {
            randomNo1 = Math.floor(Math.random() * (allData.length - 1)) + 1;
            randomNo2 = Math.floor(Math.random() * (allData.length - 1)) + 1;

            while (randomNo2 === randomNo1 && allData.length > 1) {
                randomNo2 = Math.floor(Math.random() * allData.length);
            }

            setSuggestedItem([...getItem, allData[randomNo1], allData[randomNo2]]);
        } else {
            randomNo1 = Math.floor(Math.random() * (getItem.length - 1)) + 1;
            randomNo2 = Math.floor(Math.random() * (getItem.length - 1)) + 1;
            const findIndex = getItem.findIndex(elem => elem.id == getLocalStoreId);
            setSuggestedItem([getItem[findIndex], getItem[randomNo1], getItem[randomNo2]]);
        }

    }, [allData])


    if (!suggestedItem) return <div className="text-center mt-5">Loading items...</div>;

    // console.log(suggestedItem);


    function handleClick(itemId) {
        navigate(`/detailPage/${itemId}`);
    }

    return (
        <div className='col-lg-4 col-md-6 col-12 p-0 px-lg-1 ps-md-2 mb-md-3 mb-2'>
            <Paper className='d-flex justify-content-center align-items-center p-0 flex-nowrap position-relative h-100' elevation={5}>
                <h4 className='position-absolute top-0 start-0 mt-3 ms-3' >{heading}</h4>
                {/* Left Item */}
                <div className='mt-5' style={{ flex: '50%' }}>
                    <Paper className='d-flex justify-content-center p-2 m-2  pointer' elevation={2}
                        onClick={() => handleClick(suggestedItem[0].id)}
                    >
                        <div className="itemContainer text-center py-3">
                            <img
                                style={{ maxHeight: '150px', width: '100%', objectFit: 'contain' }}
                                src={suggestedItem[0].image}
                                alt="product"
                            />
                            <div>
                                <p style={{ margin: '15px 0 0 0' }} >{suggestedItem[0].title}</p>
                                <h5 >from ₹{suggestedItem[0].price}</h5>
                            </div>
                        </div>
                    </Paper>
                </div>


                {/* Right Items */}
                <div className='mt-5' style={{ flex: '50%' }}>
                    <Paper className='d-flex justify-content-center p-2 m-2  pointer' elevation={2}
                        onClick={() => handleClick(suggestedItem[1].id)}
                    >
                        <div className="itemContainer text-center py-3">
                            <img
                                style={{ maxHeight: '150px', width: '100%', objectFit: 'contain' }}
                                src={suggestedItem[1].image}
                                alt=""
                            />
                            <div>
                                <p style={{ margin: '15px 0 0 0' }} >{suggestedItem[1].title}</p>
                                <h5 >from ₹{suggestedItem[1].price}</h5>
                            </div>
                        </div>
                    </Paper>

                    <Paper className='d-flex justify-content-center p-2 m-2 pointer' elevation={2}
                        onClick={() => handleClick(suggestedItem[2].id)}
                    >
                        <div className="itemContainer text-center py-3 ">
                            <img
                                style={{ maxHeight: '150px', width: '100%', objectFit: 'contain' }}
                                src={suggestedItem[2].image}
                                alt=""
                            />
                            <div>
                                <p style={{ margin: '15px 0 0 0' }} >{suggestedItem[2].title}</p>
                                <h5 >from ₹{suggestedItem[2].price}</h5>
                            </div>
                        </div>
                    </Paper>
                </div>
            </Paper>
        </div>
    )
}

export default ColGrid