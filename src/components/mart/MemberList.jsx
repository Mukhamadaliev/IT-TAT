// MemberList.jsx
import React, { useState } from 'react';
import PaymentModal from './PaymentModal';

const MemberList = ({ members }) => {
    const [modalInfo, setModalInfo] = useState({ isVisible: false, member: null });

    const handleMouseEnter = (member) => {
        setModalInfo({ isVisible: true, member });
    };

    const handleMouseLeave = () => {
        setModalInfo({ isVisible: false, member: null });
    };

    return (
        <div className="members-section">
            <div className="members-list-header">By A-Z</div>
            <ul className="member-list-items">
                {members.map((member, index) => (
                    <li
                        key={index}
                        className="member-item"
                        onMouseEnter={() => handleMouseEnter(member)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className="member-info-container">
                            <span className={`paid-status ${member.paid ? 'paid' : 'not-paid'}`}></span>
                            <span className="member-name">● {member.name}</span>
                        </div>
                        <span className="member-phone">{member.phone}</span>
                        <span className="member-options">...</span>
                    </li>
                ))}
            </ul>
            {modalInfo.isVisible && <PaymentModal member={modalInfo.member} />}
        </div>
    );
};

export default MemberList;