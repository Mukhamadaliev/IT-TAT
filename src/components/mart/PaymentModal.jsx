import React from 'react';

const PaymentModal = ({ member }) => {
    if (!member) return null;

    return (
        <div className="payment-modal">
            <p><strong>Ism:</strong> {member.name}</p>
            <p><strong>Qachon kelgan:</strong> {member.last_payment_date}</p>
            <p><strong>To'laganmi:</strong> {member.paid ? 'Ha' : 'Yo\'q'}</p>
        </div>
    );
};

export default PaymentModal;