import React, { useState } from 'react';
import MemberList from './MemberList';
import AttendanceTable from './AttendanceTable';
import './fevral.css';

const Fevral = () => {
    const [members, setMembers] = useState([
        { name: 'Islomov Sayyor', phone: '(90) 020-51-81', paid: true, last_payment_date: '2025-08-25' },
        { name: 'Mahmudjonov Lazizjon', phone: '(93) 339-96-23', paid: true, last_payment_date: '2025-08-26' },
        // O'zgarish: paid: false -> paid: true
        { name: 'Muhammadaliyev Ibrohim', phone: '(99) 752-88-50', paid: true, last_payment_date: '2025-07-30' },
        { name: 'Sulaymonov Muhammadjon', phone: '(93) 254-24-92', paid: true, last_payment_date: '2025-08-27' },
    ]);

    const [attendanceData, setAttendanceData] = useState([
        { name: 'Islomov Sayyor', attendance: Array(13).fill('Empty') },
        { name: 'Mahmudjonov Lazizjon', attendance: Array(13).fill('Empty') },
        { name: 'Muhammadaliyev Ibrohim', attendance: Array(13).fill('Empty') },
        { name: 'Sulaymonov Muhammadjon', attendance: Array(13).fill('Empty') },
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
        <div className="fevral-page-container">
            <div className="fevral-header">
                <h1>Frontend Fevral 14:00</h1>
                <p>Frontend • Sayyorbek Xoliqov</p>
            </div>
            <div className="fevral-content">
                <div className="fevral-sidebar">
                    <div className="course-info-card">
                        <h2>Course: Frontend</h2>
                        <p><strong>Teacher:</strong> Sayyorbek Xoliqov</p>
                        <p><strong>Price:</strong> 690 000 UZS</p>
                        <p><strong>Time:</strong> Even days • 14:00</p>
                        <br />
                        <p><strong>Rooms:</strong> Room #1</p>
                        <p><strong>Room capacity:</strong> 15</p>
                        <p><strong>Training dates:</strong> 15.02.2025—20.09.2025</p>
                        <p>(id: 123129)</p>
                        <p><strong>Branches:</strong> IT TAT</p>
                    </div>
                    <button className="add-student-button" onClick={handleAddStudent}>+ Add Student</button>
                    <MemberList members={members} />
                </div>
                <div className="fevral-main-content">
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

export default Fevral;