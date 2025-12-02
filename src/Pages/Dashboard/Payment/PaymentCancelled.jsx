import React from 'react';
import { Link } from 'react-router';

const PaymentCancelled = () => {
    return (
        <div>
            <h2>Payment is Cancelled. Please Try Again</h2>
            <Link to="/dashboard/my-parcels" className='btn btn-primary text-black'>Try Again</Link>
        </div>
    );
};

export default PaymentCancelled;