import React, { useState } from 'react';
import MemberList from './MemberList';
import AttendanceTable from './AttendanceTable';
import './dekabr.css';

const Dekabr = () => {
    const [members, setMembers] = useState([
        { name: 'Ahmadov Akmal', phone: '(99) 123-45-67', paid: true, last_payment_date: '2024-12-25' },
        { name: 'Valiyev Sardor', phone: '(90) 765-43-21', paid: false, last_payment_date: '2024-11-30' },
        { name: 'Karimova Dilnoza', phone: '(93) 876-54-32', paid: true, last_payment_date: '2024-12-28' },
    ]);

    const [attendanceData, setAttendanceData] = useState([
        { name: 'Ahmadov Akmal', attendance: Array(13).fill('Empty') },
        { name: 'Valiyev Sardor', attendance: Array(13).fill('Empty') },
        { name: 'Karimova Dilnoza', attendance: Array(13).fill('Empty') },
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
        <div className="dekabr-page-container">
            <div className="dekabr-header">
                <h1>Frontend Dekabr 12:00</h1>
                <p>Frontend • Sayyorbek Xoliqov</p>
            </div>
            <div className="dekabr-content">
                <div className="dekabr-sidebar">
                    <div className="course-info-card">
                        <h2>Course: Frontend</h2>
                        <p><strong>Teacher:</strong> Sayyorbek Xoliqov</p>
                        <p><strong>Price:</strong> 690 000 UZS</p>
                        <p><strong>Time:</strong> Even days • 12:00</p>
                        <br />
                        <p><strong>Rooms:</strong> Room #1</p>
                        <p><strong>Room capacity:</strong> 15</p>
                        <p><strong>Training dates:</strong> 01.12.2024—25.06.2025</p>
                        <p>(id: 110255)</p>
                        <p><strong>Branches:</strong> IT TAT</p>
                    </div>
                    <button className="add-student-button" onClick={handleAddStudent}>+ Add Student</button>
                    <MemberList members={members} />
                </div>
                <div className="dekabr-main-content">
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

export default Dekabr;