import React from 'react'

const EmptyCart = () => {
    return (
        <div className="container" style={{ marginTop: '150px' }}>
            <div className="row justify-content-center">
                <div className="col-md-8 text-center">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
                        alt="Empty Cart"
                        className="img-fluid mb-4"
                        style={{ maxWidth: '180px' }}
                    />
                    <h3 className="mb-3">Your Cart is Empty</h3>
                    <p className="text-muted mb-4">Looks like you haven't added anything to your cart yet.</p>
                    <a href="/" className="btn btn-warning fw-bold px-4 py-2">Continue Shopping</a>
                </div>
            </div>
        </div>
    )
}

export default EmptyCart