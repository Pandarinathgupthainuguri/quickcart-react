import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { ecomContext } from '../context/ContextProVider';


const AdBannerSlider = () => {
    const { allData } = useContext(ecomContext);
    const navigate = useNavigate();
    const [bannerData, setBannerData] = useState([]);

    useEffect(() => {
        const carousel = document.querySelector('#carouselExampleCaptions');
        if (carousel) {
            const bsCarousel = new window.bootstrap.Carousel(carousel, {
                interval: 3000, // Auto slide every 3 seconds
                ride: 'carousel', // Start auto sliding
                pause: 'hover',  // Stop auto when user hovers
                wrap: true       // Loop back to first slide
            });
        }
    }, []);

    useEffect(() => {
        if (!allData) return;
        const filterData = allData.filter(elem => elem.advertisement)
        setBannerData(filterData);

    }, [allData])


    const handleClick = (itemId) => {
        navigate(`/detailPage/${itemId}`);

    }


    if (!bannerData) return;

    return (<>
        <div id="carouselExampleCaptions" className="carousel slide mt-2 mx-2 mx-md-5" data-bs-ride="carousel">
            <div className="carousel-indicators">
                {
                    bannerData.map((e, index) =>
                        <button key={index} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={index} className="active" aria-current="true" aria-label="Slide 1"></button>

                    )
                }
            </div>
            <div className="carousel-inner">
                {bannerData.map(elem =>
                    <div key={elem.id} className="carousel-item active pointer" style={{ height: '300px' }}
                        onClick={() => handleClick(elem.id)}
                    >
                        <img src={elem.bannerImage} className="d-block w-100 h-100" alt="First Slide" />
                        {/* <div className="carousel-caption d-none d-md-block">
                        <h5>First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                    </div> */}
                    </div>
                )
                }
            </div>

            {/* Prev / Next buttons */}
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>


    </>);
};

export default AdBannerSlider;
