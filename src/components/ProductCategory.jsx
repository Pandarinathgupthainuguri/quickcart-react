import React, { useContext, useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router';
import { ecomContext } from '../context/ContextProVider';

const ProductCategory = ({ filterData, heading }) => {
    const navigate = useNavigate();

    return (
        <Box className=' mt-2'>

            <Paper elevation={5} className='mx-2 mx-md-5 pt-3 my-3'>
                <h4 className='ms-3'>{heading}</h4>
                <div className='d-flex flex-nowrap overflow-auto py-3 custom-scrollbar'>
                    {
                        filterData && filterData.map((elem) =>
                            <div key={elem.id} className="d-flex justify-content-center p-3 mx-3"
                            // style={{ backgroundColor: 'green', width: '200px' }}
                            >
                                <div className="itemContainer pointer"
                                    onClick={() => {
                                        navigate(`/relatedItem/${elem.id}`);
                                        window.scrollTo(0, 0);
                                    }}
                                >
                                    <img style={{ height: '180px' }} src={elem.image} alt="" />
                                    <div className='d-flex flex-column justify-content-center align-items-center'>
                                        <p style={{ margin: '20px 0 0 0' }}>{elem.itemType}</p>
                                        <h5 style={{ margin: '0', lineHeight: '1', fontSize: '17px' }}>from ₹{elem.discountPrice}</h5>
                                    </div>
                                </div>
                            </div>
                        )
                    }</div>


            </Paper>
        </Box>
    )
}

export default ProductCategory

