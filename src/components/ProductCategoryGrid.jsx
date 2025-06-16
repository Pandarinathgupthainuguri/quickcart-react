import React from 'react';
import Box from '@mui/material/Box';
import ColGrid from '../others/ColGrid';
import ColGrid2 from '../others/ColGrid2';
import ColGrid3 from '../others/ColGrid3';

const ProductCategoryGrid = () => {
    return (<>
        <Box className="row my-0 mx-2 mx-md-5"
        >
            <ColGrid2 heading={'Top Selection'} />
            <ColGrid heading={'Suggested for You'} />
            <ColGrid3 heading={'More to Explore'} />
        </Box>
    </>);
};

export default ProductCategoryGrid;
