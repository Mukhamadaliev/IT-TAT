import React, { useState } from 'react';
import PaymentModal from './PaymentModal';

const MemberList = ({ members }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedMember, setSelectedMember] = useState(null);

    const openModal = (member) => {
        setSelectedMember(member);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedMember(null);
    };

    return (
        <div className="members-section">
            <div className="members-list-header">By A-Z</div>
            <ul className="member-list-items">
                {members.map((member, index) => (
                    <li key={index} className="member-item">
                        <div className="member-info-container">
                            <span className={`paid-status ${member.paid ? 'paid' : 'not-paid'}`}></span>
                            <span className="member-name">{member.name}</span>
                        </div>
                        <div className="member-details">
                            <span className="member-phone">{member.phone}</span>
                            <span className="member-options" onClick={() => openModal(member)}>...</span>
                        </div>
                    </li>
                ))}
            </ul>
            {selectedMember && <PaymentModal isOpen={isModalOpen} onClose={closeModal} member={selectedMember} />}
        </div>
    );
};

export default MemberList;