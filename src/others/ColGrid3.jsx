import React, { useContext, useEffect, useState } from 'react'
import { ecomContext } from '../context/ContextProVider';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router';

const ColGrid3 = ({ heading }) => {
    const { allData } = useContext(ecomContext);

    const navigate = useNavigate();

    const [randomSuggestion, setRandomSuggestion] = useState(null);

    useEffect(() => {
        if (!allData.length) return;

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

        setRandomSuggestion(getUniqueRandomItems(allData, 4));
    }, [allData]);

    if (!randomSuggestion || !randomSuggestion.length) {
        return <div>Loading Items...</div>;
    }


    function handleClick(itemId) {
        navigate(`/relatedItem/${itemId}`);
    }

    return (
        <div className='col-lg-4 col-md-6 col-12 p-0 ps-lg-2 pe-md-2 mb-md-3 mb-2'>
            <Paper className='d-flex justify-content-center align-items-center  p-0 flex-nowrap position-relative h-100' elevation={5}>
                <h4 className='position-absolute top-0 start-0 mt-3 ms-3' >{heading}</h4>
                {/* Left Item */}
                <div className='mt-5' style={{ flex: '50%' }}>
                    <Paper className='d-flex justify-content-center p-2 m-2  pointer' elevation={2}
                        onClick={() => handleClick(randomSuggestion[0].id)}
                    >
                        <div className="itemContainer text-center py-3">
                            <img
                                style={{ maxHeight: '150px', width: '100%', objectFit: 'contain' }}
                                src={randomSuggestion[0].image}
                                alt=""
                            />
                            <div>
                                <p style={{ margin: '15px 0 0 0' }} >{randomSuggestion[0].title}</p>
                                <h5 >from ₹{randomSuggestion[0].price}</h5>
                            </div>
                        </div>
                    </Paper>

                    <Paper className='d-flex justify-content-center p-2 m-2 pointer' elevation={2}
                        onClick={() => handleClick(randomSuggestion[1].id)}
                    >
                        <div className="itemContainer text-center py-3 ">
                            <img
                                style={{ maxHeight: '150px', width: '100%', objectFit: 'contain' }}
                                src={randomSuggestion[1].image}
                                alt=""
                            />
                            <div>
                                <p style={{ margin: '15px 0 0 0' }} >{randomSuggestion[1].title}</p>
                                <h5 >from ₹{randomSuggestion[1].price}</h5>
                            </div>
                        </div>
                    </Paper>
                </div>

                {/* Right Items */}
                <div className='mt-5' style={{ flex: '50%' }}>
                    <Paper className='d-flex justify-content-center p-2 m-2  pointer' elevation={2}
                        onClick={() => handleClick(randomSuggestion[2].id)}
                    >
                        <div className="itemContainer text-center py-3">
                            <img
                                style={{ maxHeight: '150px', width: '100%', objectFit: 'contain' }}
                                src={randomSuggestion[2].image}
                                alt=""
                            />
                            <div>
                                <p style={{ margin: '15px 0 0 0' }} >{randomSuggestion[2].title}</p>
                                <h5 >from ₹{randomSuggestion[2].price}</h5>
                            </div>
                        </div>
                    </Paper>

                    <Paper className='d-flex justify-content-center p-2 m-2 pointer' elevation={2}
                        onClick={() => handleClick(randomSuggestion[3].id)}
                    >
                        <div className="itemContainer text-center py-3 ">
                            <img
                                style={{ maxHeight: '150px', width: '100%', objectFit: 'contain' }}
                                src={randomSuggestion[3].image}
                                alt=""
                            />
                            <div>
                                <p style={{ margin: '15px 0 0 0' }} >{randomSuggestion[3].title}</p>
                                <h5 >from ₹{randomSuggestion[3].price}</h5>
                            </div>
                        </div>
                    </Paper>
                </div>
            </Paper >
        </div >
    )
}

export default ColGrid3