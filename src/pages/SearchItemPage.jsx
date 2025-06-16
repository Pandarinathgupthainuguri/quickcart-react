import React, { useContext } from 'react'
import { ecomContext } from '../context/ContextProVider'
import RelatedItemRight from '../others/RelatedItemRight';
import { useNavigate, useParams } from 'react-router';

const SearchItemPage = () => {
    const { relatedItem } = useContext(ecomContext);

    const navigate = useNavigate();
    const params = useParams();

    const handleClick = (itemId) => {
        navigate(`/detailPage/${itemId}`)
    }

    return (

        <>
            <div className='mx-md-5' style={{ marginTop: "60px" }}>
                <h2 className="fw-semibold fs-4 fs-md-3 border-bottom border-primary pb-2 mb-4 text-dark">
                    Search results for <span className="text-primary">"{params.searchStr}"</span>
                </h2>

                <RelatedItemRight relatedItem={relatedItem} handleClick={handleClick} />
            </div>
        </>
    )
}

export default SearchItemPage