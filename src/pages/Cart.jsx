import React, { useContext, useEffect, useState } from 'react'
import { ecomContext } from '../context/ContextProVider'
import EmptyCart from '../others/EmptyCart';
import { useNavigate } from 'react-router';

const Cart = () => {
    const { cartArray, setCartArray, allData, setAllData } = useContext(ecomContext);
    if (!cartArray) {
        return
    }

    const navigate = useNavigate();

    let totalMRP = 0;
    let totalDisCountPrice = 0;
    let discount;
    const coupons = 40;
    const platFormFee = 20;
    const deliveryCharges = 0
    let totalAmount = 0;

    // const [itemCount, setItemCount] = useState(1);

    cartArray.forEach(elem => {
        totalMRP = totalMRP + elem.price;
        totalDisCountPrice += elem.discountPrice;

    })
    discount = totalMRP - totalDisCountPrice;
    totalAmount = (totalDisCountPrice + platFormFee + deliveryCharges) - coupons;

    function handleRemoveCart(itemId) {
        const updatedArr = cartArray.filter(elem => elem.id !== itemId);
        setCartArray(updatedArr);
        localStorage.setItem('cartArr', JSON.stringify(updatedArr));

        const updatedAllData = allData.map(elem => {
            if (elem.id === itemId) {
                return {
                    ...elem,
                    addedToCart: false
                }
            }
            return elem
        })
        localStorage.setItem('productData', JSON.stringify(updatedAllData))
        setAllData(updatedAllData)
    }




    function handleIncDecItem(incDec, itemId) {
        const updatedCartArr = cartArray.map(elem => {
            if (elem.id === itemId) {
                let newQty = elem.purchasedQuantity;
                if (incDec === '+') {
                    newQty += 1;
                } else if (incDec === '-' && newQty > 1) {
                    newQty -= 1;
                }
                // console.log(newQty);

                return {
                    ...elem,
                    purchasedQuantity: newQty,
                    discountPrice: elem.fixedDiscountPrice * newQty,
                    price: elem.fixedPrice * newQty,
                };
            }
            return elem;
        });

        setCartArray(updatedCartArr);
        localStorage.setItem('cartArr', JSON.stringify(updatedCartArr));
    }

    const handleClick = (itemId) => {
        navigate(`/detailPage/${itemId}`)
    }


    if (cartArray.length == 0 || !cartArray) {
        return <EmptyCart />

    }

    return (
        <div className="container my-5 pt-3">
            <div className="row gy-4">
                {/* Left: Cart Items */}
                <div className="col-12 col-lg-8">
                    {
                        cartArray.map(elem => <div key={elem.id} className="card shadow-sm mb-2">
                            <div className="row g-0 p-3 align-items-center">
                                <div className="col-4 col-md-2 text-center">
                                    <img
                                        onClick={() => handleClick(elem.id)}
                                        src={elem.image}
                                        className="img-fluid rounded pointer"
                                        alt="Product"
                                    />
                                </div>
                                <div className="col-8 col-md-10">
                                    <div className="card-body py-0">
                                        <div className='pointer'
                                            onClick={() => handleClick(elem.id)}
                                        >
                                            <h6 className="card-title fw-semibold">{elem.title}</h6>
                                            <p className="mb-2 d-flex align-items-center flex-wrap">
                                                {
                                                    elem.discountPercentage == 0 ?
                                                        <span className="text-success fw-bold me-2">₹{elem.discountPrice}</span> :
                                                        <>
                                                            <s className="me-2 text-muted">₹{elem.price}</s>
                                                            <span className="text-success fw-bold me-2">₹{elem.discountPrice}</span>
                                                            <small className="text-muted">{elem.discountPercentage}% Off</small>
                                                        </>
                                                }

                                            </p>
                                        </div>

                                        <div className="d-flex flex-wrap align-items-center gap-2">
                                            <button className="btn btn-outline-danger btn-sm"
                                                onClick={() => handleRemoveCart(elem.id)}
                                            >REMOVE</button>
                                            <div className="input-group input-group-sm w-auto">
                                                <button className="btn btn-outline-secondary btn-sm"
                                                    onClick={() => handleIncDecItem("-", elem.id)}
                                                >−</button>
                                                <input
                                                    type="text"
                                                    className="form-control text-center"
                                                    value={elem.purchasedQuantity}
                                                    readOnly
                                                    style={{ width: '40px' }}
                                                />
                                                <button className="btn btn-outline-secondary btn-sm"
                                                    onClick={() => handleIncDecItem("+", elem.id)}
                                                >+</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }

                </div>

                {/* Right: Price Details */}
                <div className="col-12 col-lg-4">
                    <div className="card p-3 shadow-sm">
                        <h5 className="border-bottom pb-2 fw-semibold">PRICE DETAILS</h5>
                        <ul className="list-group list-group-flush mb-3">
                            <li className="list-group-item d-flex justify-content-between px-0">
                                <span>Price ({cartArray.length} item)</span> <span>₹{totalMRP}</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between px-0">
                                <span>Discount</span> <span className="text-success">− ₹{discount}</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between px-0">
                                <span>Coupons for you</span> <span className="text-success">− ₹{coupons}</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between px-0">
                                <span>Platform Fee</span> <span>₹{platFormFee}</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between px-0">
                                <span>Delivery Charges</span> <span className="text-success">{deliveryCharges == 0 ? 'Free' : deliveryCharges}</span>
                            </li>
                        </ul>

                        <div className="d-flex justify-content-between fw-bold mb-3">
                            <span>Total Amount</span> <span>₹{totalAmount}</span>
                        </div>

                        <button className="btn btn-warning w-100 fw-bold mb-2">PLACE ORDER</button>
                        <div className="text-muted small text-center">
                            <i className="bi bi-shield-check"></i> Safe and Secure Payments. Easy returns.
                            100% Authentic products.
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Cart