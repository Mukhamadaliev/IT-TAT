import React from "react";

const PaymentModal = ({ isOpen, onClose, member }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">O'quvchi ma'lumoti</h2>
        {/* O'zgarish: Tanlangan o'quvchi ma'lumotlari ko'rsatilmoqda */}
        {member && (
          <div>
            <p><strong>Ismi:</strong> {member.name}</p>
            <p><strong>Telefon:</strong> {member.phone}</p>
            <p><strong>To'lov holati:</strong> {member.paid ? "To'langan" : "Qarzdor"}</p>
            <p><strong>Oxirgi to'lov sanasi:</strong> {member.last_payment_date}</p>
          </div>
        )}
        <button
          onClick={onClose}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Yopish
        </button>
      </div>
    </div>
  );
};

export default PaymentModal;