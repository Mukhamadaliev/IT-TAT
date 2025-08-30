import React from 'react';

const AttendanceTable = ({ attendanceData, setAttendanceData }) => {
  const dates = [
    '2 aug', '5 aug', '7 aug', '9 aug', '12 aug', '14 aug', '16 aug', '19 aug', '21 aug', '23 aug', '26 aug', '28 aug', '30 aug'
  ];

  const handleStatusChange = (studentIndex, dateIndex) => {
    const newAttendanceData = [...attendanceData];
    const currentStatus = newAttendanceData[studentIndex].attendance[dateIndex];

    // Holatni o'zgartirish mantiqi: Empty -> Present -> Absent -> Empty
    let nextStatus;
    if (currentStatus === 'Empty') {
      nextStatus = 'Present';
    } else if (currentStatus === 'Present') {
      nextStatus = 'Absent';
    } else { // currentStatus === 'Absent'
      nextStatus = 'Empty';
    }
    
    newAttendanceData[studentIndex].attendance[dateIndex] = nextStatus;
    setAttendanceData(newAttendanceData);
  };
  
  const getButtonContent = (status) => {
    if (status === 'Present') {
      return 'Kelgan';
    }
    if (status === 'Absent') {
      return 'Yo\'q';
    }
    return '⚪'; // Bo'sh holat uchun belgi
  };

  return (
    <div className="attendance-container">
      <div className="attendance-header">
        <h2 className="section-title">Attendance</h2>
        <div className="date-navigation">
          <button>Current</button>
          <button>&lt;</button>
          <button>&gt;</button>
          <span>aug 2025</span>
          <button>&lt;</button>
          <button>&gt;</button>
        </div>
      </div>
      <div className="attendance-table-wrapper">
        <table className="attendance-table">
          <thead>
            <tr>
              <th>Name</th>
              {dates.map((date, index) => (
                <th key={index}>{date}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {attendanceData.map((student, studentIndex) => (
              <tr key={studentIndex}>
                <td>{student.name}</td>
                {student.attendance.map((status, statusIndex) => (
                  <td key={statusIndex}>
                    <button 
                      className={`attendance-button ${status.toLowerCase()}`}
                      onClick={() => handleStatusChange(studentIndex, statusIndex)}
                    >
                      {getButtonContent(status)}
                    </button>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AttendanceTable;