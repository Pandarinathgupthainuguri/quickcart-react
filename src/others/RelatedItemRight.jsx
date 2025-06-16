import React, { useContext } from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { ecomContext } from '../context/ContextProVider';

const RelatedItemRight = ({ relatedItem, handleClick }) => {


    return (
        <Box className="itemList row m-0" style={{ flex: '80%' }}>
            {relatedItem.map((elem) => (
                <div key={elem.id} className="col-12 col-sm-6 col-md-4 col-lg-3 p-2">
                    <Paper
                        elevation={5}
                        className="itemContainer pointer d-flex flex-column p-3 h-100"
                        style={{
                            transition: 'transform 0.3s ease',
                            borderRadius: '10px',
                            maxHeight: '380px'
                        }}
                        onClick={() => handleClick(elem.id)}
                        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
                        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                    >
                        <img
                            className="align-self-center mb-3"
                            style={{
                                width: '100%',
                                height: '200px',
                                objectFit: 'contain',
                                borderRadius: '8px',
                            }}
                            src={elem.image}
                            alt={elem.title}
                        />
                        <div className="px-2">
                            <h6 className="fw-semibold mb-1 text-truncate">{elem.title}</h6>
                            <p className="text-muted small mb-2 text-truncate">{elem.description}</p>

                            <div className="d-flex align-items-center flex-wrap gap-2">
                                <span className="fw-bold text-success">₹{elem.discountPrice}</span>
                                {elem.discountPercentage !== 0 && (
                                    <>
                                        <span className="text-muted text-decoration-line-through small">
                                            ₹{elem.price}
                                        </span>
                                        <span className="text-danger small">{elem.discountPercentage}% off</span>
                                    </>
                                )}
                            </div>
                        </div>
                    </Paper>
                </div>
            ))}
        </Box>

    )
}

export default RelatedItemRight