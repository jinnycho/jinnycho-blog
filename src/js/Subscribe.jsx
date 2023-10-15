import React, { useState, useEffect } from 'react';
import { EmailInputModal } from "./EmailInputModal";

export function Subscribe() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openEmailInputModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    };

    async function handleEmailSubmit(email) {
        closeModal();
        const emailData = {
            'email': email
        };
        const response = await fetch('https://my-blog-subscribe.eunjincho503.workers.dev', {
            method: "POST",
            mode: "no-cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
              "Content-Type": "application/json",
            },
            redirect: "follow",
            referrerPolicy: "no-referrer",
            body: JSON.stringify(emailData),
          });
    };
    
    return (
        <>
            <button className="subscribe-form-button" onClick={openEmailInputModal}> Subscribe </button>
            <EmailInputModal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                onSubmit={handleEmailSubmit}>
            </EmailInputModal>
        </>
    );
}