import React, { Component } from 'react';

import './messages-list.css'

const MessagesList = ({ label, id }) => {
    return (
        <div className='grid-container'>
            <span className='messages-list-id post-1'>{ id }</span>
            <span className='messages-list-label post-2'>{ label }</span>
            <div className='b-list post-3'>
                <p className='sender'>Guest - 10 Feb</p>
                <button className='add-button'>
                    <i className="fas fa-plus"></i>
                </button>
            </div>
        </div>
    )
}

export default MessagesList;
