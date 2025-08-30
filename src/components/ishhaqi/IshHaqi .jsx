// src/IshHaqi.jsx
import React from "react";
import './ishHaqi.css'; // Yangi CSS faylini import qilamiz

const IshHaqi = ({ fevralData, martData, dekabrData }) => {
  // Umumiy hisob-kitoblar
  const totalStudents = fevralData.students + martData.students + dekabrData.students;
  const totalPayment = fevralData.payment + martData.payment + dekabrData.payment;

  return (
    <div className="ish-haqi-page-container">
      <h2>Ish haqi ma'lumoti</h2>
      
      {/* Dekabr guruhi ma'lumoti */}
      <div className="group-info">
        <h3>Frontend Dekabr 12:00</h3>
        <p>O‘quvchilar soni: {dekabrData.students}</p>
        <p>Jami to‘lov summasi: {dekabrData.payment.toLocaleString()} UZS</p>
      </div>
      
      {/* Fevral guruhi ma'lumoti */}
      <div className="group-info">
        <h3>Frontend Fevral 14:00</h3>
        <p>O‘quvchilar soni: {fevralData.students}</p>
        <p>Jami to‘lov summasi: {fevralData.payment.toLocaleString()} UZS</p>
      </div>
      
      {/* Mart guruhi ma'lumoti */}
      <div className="group-info">
        <h3>Frontend Mart 16:00</h3>
        <p>O‘quvchilar soni: {martData.students}</p>
        <p>Jami to‘lov summasi: {martData.payment.toLocaleString()} UZS</p>
      </div>
      
      <hr />
      <div className="total-info">
        <h3>Umumiy hisob-kitob</h3>
        <p>Jami o‘quvchilar: {totalStudents}</p>
        <p>Umumiy to‘lov: {totalPayment.toLocaleString()} UZS</p>
      </div>
    </div>
  );
};

export default IshHaqi;
