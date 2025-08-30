// Mart.jsx
import React, { useState } from 'react';
import MemberList from './MemberList';
import AttendanceTable from './AttendanceTable';
import './mart.css';

const Mart = () => {
  const [members, setMembers] = useState([
    { name: 'Abduraximov Islsm', phone: '(93) 545-48-46', paid: true, last_payment_date: '2025-08-25' },
    { name: 'Akbarov Alaypar', phone: '(99) 774-73-13', paid: true, last_payment_date: '2025-08-26' },
    { name: 'Altiboyev Faridon', phone: '(99) 670-25-33', paid: false, last_payment_date: '2025-07-30' },
    { name: 'G\'ulomova Zisila', phone: '(93) 490-10-90', paid: true, last_payment_date: '2025-08-27' },
    { name: 'Raxmonov Sadidakon', phone: '(97) 925-50-02', paid: false, last_payment_date: '2025-08-01' },
    { name: 'Sadullayevv Sanjar', phone: '(97) 554-18-72', paid: true, last_payment_date: '2025-08-28' },
  ]);

  const [attendanceData, setAttendanceData] = useState([
    { name: 'Abduraximov Islsm', attendance: Array(13).fill('Empty') },
    { name: 'Akbarov Alaypar', attendance: Array(13).fill('Empty') },
    { name: 'Altiboyev Faridon', attendance: Array(13).fill('Empty') },
    { name: 'G\'ulomova Zisila', attendance: Array(13).fill('Empty') },
    { name: 'Raxmonov Sadidakon', attendance: Array(13).fill('Empty') },
    { name: 'Sadullayevv Sanjar', attendance: Array(13).fill('Empty') },
  ]);

  const handleAddStudent = () => {
    const newStudentName = prompt("Yangi o'quvchining ismini kiriting:");
    if (newStudentName && newStudentName.trim() !== "") {
      const newStudentPhone = prompt("Yangi o'quvchining telefon raqamini kiriting:");
      const newMember = { name: newStudentName, phone: newStudentPhone || 'N/A', paid: false, last_payment_date: 'N/A' };
      setMembers([...members, newMember]);

      const newAttendanceEntry = { name: newStudentName, attendance: Array(13).fill('Empty') };
      setAttendanceData([...attendanceData, newAttendanceEntry]);
    }
  };

  return (
    <div className="mart-page-container">
      <div className="mart-header">
        <h1>Frontend Mart 16:00</h1>
        <p>Frontend • Sayyorbek Xoliqov</p>
      </div>

      <div className="mart-content">
        <div className="mart-sidebar">
          <div className="course-info-card">
            <h2>Course: Frontend</h2>
            <p><strong>Teacher:</strong> Sayyorbek Xoliqov</p>
            <p><strong>Price:</strong> 690 000 UZS</p>
            <p><strong>Time:</strong> Even days • 16:00</p>
            <br />
            <p><strong>Rooms:</strong> Room #1</p>
            <p><strong>Room capacity:</strong> 15</p>
            <p><strong>Training dates:</strong> 11.03.2025—31.10.2025</p>
            <p>(id: 130194)</p>
            <p><strong>Branches:</strong> IT TAT</p>
          </div>
          <button className="add-student-button" onClick={handleAddStudent}>+ Add Student</button>
          <MemberList members={members} />
        </div>

        <div className="mart-main-content">
          <div className="tabs">
            <button className="tab-button active">Attendance</button>
            <button className="tab-button">Online lessons and materials</button>
            <button className="tab-button">Exams</button>
          </div>

          <AttendanceTable attendanceData={attendanceData} setAttendanceData={setAttendanceData} />
        </div>
      </div>
    </div>
  );
};

export default Mart;