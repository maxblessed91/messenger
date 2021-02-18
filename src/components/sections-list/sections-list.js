import React from 'react';

// import './messages-list.css'

const SectionsList = ({ label, id }) => {
    return (
        <div className='list-item'>
            <span>{ label.split(', ') }</span>
            <span> ({ id })</span>
        </div>
    )
    }


export default SectionsList;
