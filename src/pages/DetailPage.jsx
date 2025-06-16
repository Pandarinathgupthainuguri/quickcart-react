import React, { useContext, useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Paper from '@mui/material/Paper';
import { useNavigate, useParams } from 'react-router';
import { ecomContext } from '../context/ContextProVider';
import SnackBar from '../others/SnackBar';
import RelatedItemRight from '../others/RelatedItemRight';

const DetailPage = () => {
    const { allData, setCartArray, setAllData, relatedItem } = useContext(ecomContext);

    const params = useParams();
    const navigate = useNavigate();
    // console.log(params.itemId);

    const [detailItem, setDetailItem] = useState(null);
    const [suggestedItem, setSuggestedItem] = useState([]);


    const [snackMessage, setSnackMessage] = useState('');

    localStorage.setItem('setSuggestedKey', (params.itemId))

    useEffect(() => {
        if (!allData.length) return;

        const filterItem = allData.filter(elem =>
            elem.id == params.itemId
        )
        setDetailItem(filterItem);

        const findItem = allData.filter(e => e.itemType === filterItem[0].itemType);
        setSuggestedItem(findItem);


        window.scrollTo(0, 0);


    }, [params.itemId, allData])



    if (!detailItem) return <div className="text-center mt-5">Loading item details...</div>;


    function handleCart(itemId) {

        const findItem = allData.find(elem => elem.id == itemId);
        setCartArray(prevItem => {
            const updated = [
                ...prevItem,
                {
                    ...findItem,
                    purchasedQuantity: 1,
                    fixedDiscountPrice: findItem.discountPrice,
                    fixedPrice: findItem.price,
                }];
            localStorage.setItem('cartArr', JSON.stringify(updated));
            return updated;
        });

        setSnackMessage(`${findItem.title} added to cart!`);

        const updatedAllData = allData.map(elem => {
            if (elem.id === itemId) {
                return {
                    ...elem,
                    addedToCart: true
                }
            }
            return elem
        })
        localStorage.setItem('productData', JSON.stringify(updatedAllData))
        setAllData(updatedAllData)

    }


    // navigate to item detail page
    const handleClick = (itemId) => {
        navigate(`/detailPage/${itemId}`)
        window.scrollTo(0, 0);
    }


    return (<>
        {snackMessage && <SnackBar message={snackMessage} />}


        <div className="container p-0" style={{ marginTop: '60px', }}>
            <div className='row m-0'>
                {/* left col */}
                <Paper elevation={5} className='col-md-4 col-12 p-3 pt-5' >

                    <div id='itemImgContainer d-flex'>
                        <div className='d-flex justify-content-center'>
                            <img src={detailItem[0].image} alt=""
                                style={{ width: '85%', objectFit: 'contain' }}
                            />
                        </div>
                        <div className='row m-0 mt-3' style={{ height: '50%' }}>
                            <div className='col-6 p-0 pe-1'>
                                {
                                    allData.some(item => item.id == detailItem[0].id && item.addedToCart) ?
                                        <button type="button" className="btn btn-outline-success w-100 h-100 fs-5"
                                            onClick={() => navigate('/cart')}
                                        >Go to cart</button>
                                        :
                                        <button type="button" className="btn btn-outline-success w-100 h-100 fs-5"
                                            onClick={() => handleCart(detailItem[0].id)}
                                        >Add to cart</button>
                                }

                            </div>
                            <div className='col-6 p-0 ps-1'>
                                <button type="button" className="btn btn-success w-100 h-100 fs-5">Buy now</button>
                            </div>
                        </div>
                    </div>
                </Paper>

                {/* right col */}
                <div className='col-md-8 col-12 ps-4' style={{}}>
                    <div id='itemContainer'>
                        <div className="topItem mt-2">
                            <h5 className='m-0 fs-4'>{detailItem[0].title}</h5>
                            <p>{detailItem[0].description}</p>
                            <ButtonGroup variant="outlined" size="small" aria-label="Basic button group">
                                <Button>
                                    <span>{detailItem[0].rating}</span>
                                    <svg className='mx-1' xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="black" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg> | 9 ratings
                                </Button>
                            </ButtonGroup>
                        </div>
                        <hr />
                        <div>
                            <div className='pricing'>
                                <p> <span className='fs-4 fw-bold me-2'>₹{detailItem[0].discountPrice}</span>
                                    {detailItem[0].discountPercentage != 0 &&
                                        <> MRP < span > <s>₹{detailItem[0].price}</s></span>
                                            <span className='ms-3 text-warning-emphasis'>({detailItem[0].discountPercentage}% OFF)</span>
                                        </>
                                    }
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* similar products */}
        {
            !suggestedItem.length ? null :
                <div className="mx-5 mt-5">
                    <h4 className="mb-1 ps-2">Similar Products</h4>
                    <RelatedItemRight relatedItem={suggestedItem} handleClick={handleClick} />
                </div>
        }


    </>)
}

export default DetailPage