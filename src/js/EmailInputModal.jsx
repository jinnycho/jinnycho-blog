import React, { useState } from 'react';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

export function EmailInputModal({ isOpen, onRequestClose, onSubmit }) {
    const [email, setEmail] = useState('');

    const handleSubmit = () => {
        onSubmit(email);
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            style={customStyles}
            contentLabel="Email Input Modal"
        >
        <input
            className="email-input"
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleSubmit} className="email-submit-button">Submit</button>
        <div className="close-div">
            <i className="close" onClick={onRequestClose}></i>
        </div>
        </Modal>
    );
};