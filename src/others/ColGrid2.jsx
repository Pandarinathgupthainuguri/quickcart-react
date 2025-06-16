import React, { useState, useEffect, useContext } from 'react'
import Paper from '@mui/material/Paper';
import { ecomContext } from '../context/ContextProVider';
import { useNavigate } from 'react-router';

const ColGrid2 = ({ heading }) => {

    const { allData } = useContext(ecomContext);

    const navigate = useNavigate();

    const [suggestedByCategory, setSuggestedByCategory] = useState(null);

    useEffect(() => {
        if (!allData.length) return;
        const randomValue = Math.floor(Math.random() * (50 - 1)) + 1;

        const localKey = JSON.parse(localStorage.getItem('setSuggestedKey')) ?? randomValue;

        const findById = allData.find(elem => elem.id === localKey);
        if (findById) {
            const filterByCategory = allData.filter(elem => elem.category === findById.category)

            function getUniqueRandomItems(array, count) {
                const usedIndices = new Set();
                const result = [];

                while (result.length < Math.min(count, array.length)) {
                    const randomIndex = Math.floor(Math.random() * array.length);
                    if (!usedIndices.has(randomIndex)) {
                        usedIndices.add(randomIndex);
                        result.push(array[randomIndex]);
                    }
                }

                return result;
            }

            if (filterByCategory.length < 4) {
                setSuggestedByCategory(getUniqueRandomItems(allData, 4));
            } else {
                setSuggestedByCategory(getUniqueRandomItems(filterByCategory, 4));
            }
        }

    }, [allData])


    // console.log(suggestedByCategory);

    if (!suggestedByCategory) return <div>Loading Items</div>;

    const handleClick = (itemId) => {
        navigate(`/relatedItem/${itemId}`)
    }


    return (
        <div className='col-lg-4 col-md-6 col-12 p-0 pe-md-2 mb-md-3 mb-2'>
            <Paper className='d-flex justify-content-center align-items-center  p-0 flex-nowrap position-relative h-100' elevation={5}>
                <h4 className='position-absolute top-0 start-0 mt-3 ms-3' >{heading}</h4>
                {/* Left Item */}
                <div className='mt-5' style={{ flex: '50%' }}>
                    <Paper className='d-flex justify-content-center p-2 m-2  pointer' elevation={2}
                        onClick={() => handleClick(suggestedByCategory[0].id)}
                    >
                        <div className="itemContainer text-center py-3">
                            <img
                                style={{ maxHeight: '150px', width: '100%', objectFit: 'contain' }}
                                src={suggestedByCategory[0].image}
                                alt=""
                            />
                            <div>
                                <p style={{ margin: '15px 0 0 0' }} >{suggestedByCategory[0].title}</p>
                                <h5 >from ₹{suggestedByCategory[0].price}</h5>
                            </div>
                        </div>
                    </Paper>

                    <Paper className='d-flex justify-content-center p-2 m-2 pointer' elevation={2}
                        onClick={() => handleClick(suggestedByCategory[1].id)}
                    >
                        <div className="itemContainer text-center py-3 ">
                            <img
                                style={{ maxHeight: '150px', width: '100%', objectFit: 'contain' }}
                                src={suggestedByCategory[1].image}
                                alt=""
                            />
                            <div>
                                <p style={{ margin: '15px 0 0 0' }} >{suggestedByCategory[1].title}</p>
                                <h5 >from ₹{suggestedByCategory[1].price}</h5>
                            </div>
                        </div>
                    </Paper>
                </div>

                {/* Right Items */}
                <div className='mt-5' style={{ flex: '50%' }}>
                    <Paper className='d-flex justify-content-center p-2 m-2  pointer' elevation={2}
                        onClick={() => handleClick(suggestedByCategory[2].id)}
                    >
                        <div className="itemContainer text-center py-3">
                            <img
                                style={{ maxHeight: '150px', width: '100%', objectFit: 'contain' }}
                                src={suggestedByCategory[2].image}
                                alt=""
                            />
                            <div>
                                <p style={{ margin: '15px 0 0 0' }} >{suggestedByCategory[2].title}</p>
                                <h5 >from ₹{suggestedByCategory[2].price}</h5>
                            </div>
                        </div>
                    </Paper>

                    <Paper className='d-flex justify-content-center p-2 m-2 pointer' elevation={2}
                        onClick={() => handleClick(suggestedByCategory[3].id)}
                    >
                        <div className="itemContainer text-center py-3 ">
                            <img
                                style={{ maxHeight: '150px', width: '100%', objectFit: 'contain' }}
                                src={suggestedByCategory[3].image}
                                alt=""
                            />
                            <div>
                                <p style={{ margin: '15px 0 0 0' }} >{suggestedByCategory[3].title}</p>
                                <h5 >from ₹{suggestedByCategory[3].price}</h5>
                            </div>
                        </div>
                    </Paper>
                </div>
            </Paper >
        </div >
    )
}

export default ColGrid2