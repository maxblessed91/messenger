import React, { Component } from 'react';
import MessagesList from '../messages-list';

import './messenger-screen.css';

const MessengerScreen = ({ messages }) => {
    const messagesArr = messages.map((item) => {
        return (
            <li>
                <MessagesList {...item} />
            </li>
        );
    });

    return (
            <div className='messenger-screen'>
                <div className='header'>
                    <div className='questions-messenger'>
                        <p>Questions Messenger</p>
                    </div>
                    <div className='all-questions'>
                        <p>All Questions</p> <i className="fas fa-sort-down srt-dwn"></i>
                    </div>
                </div>
                <div className='message-list'>
                    <ul className='mes-array'>
                        { messagesArr }
                    </ul>
                </div>
            </div>
    );
};

export default MessengerScreen;
