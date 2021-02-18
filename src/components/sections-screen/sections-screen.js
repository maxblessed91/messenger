import React, { Component } from 'react';
import SectionsList from '../sections-list';
import { Link } from 'react-router-dom';


import './sections-screen.css';

const SectionsScreen = ({ sections }) => {
    const sectionsArr = sections.map((item) => {
        const { url } = item;
        return (
            <li className='list-ite'>
                <Link to={url} >
                    <i className="fas fa-inbox ">
                        <SectionsList label={item.label} id={item.id} />
                    </i>
                </Link>
            </li>
        );
    });
        return (
            <ul className='section-list'>
                { sectionsArr }
            </ul>
        );
};

export default SectionsScreen;
