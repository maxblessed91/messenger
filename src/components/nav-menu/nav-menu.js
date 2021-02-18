import React, { Component } from 'react';

import './nav-menu.css';
import '../add-section/add-section.css';
import AddSection from '../add-section';
import SectionsScreen from '../sections-screen';

export default class NavMenu extends Component {

    notificationsID = 85;

    urlNumber = 1;
    urlItem = `/messenger-screen/`;

    state = {
        sectionsData: [
            this.createSection("My Questions"),
            this.createSection("Messenger"),
            this.createSection("Community QA"),
            this.createSection("FAQ")
        ]
    };

    createSection(label) {
        return {
            label,
            id: (`${this.notificationsID++}`),
            url: `${this.urlItem}${this.urlNumber++}`
        }
    }

    addSection = (text) => {
        const newItem = {
            label: text,
          };

        this.setState(({ sectionsData }) => {
            const newArr = [
                ...sectionsData,
                newItem
            ];

            return {
                sectionsData: newArr
            };
        });
    }

    render() {

        const { sectionsData } = this.state;

        return (
            <div className='nav-menu'>
                <div className='profile'>
                    <img src={`https://artchange.ru/_pu/5/50725278.jpg`} className='profile-img'></img>
                    <div className='info'>
                        <div className='name'>
                            <p>David Hill</p>
                        </div>
                        <div className='status'>
                            <p>online</p>
                        </div>
                    </div>
                    <AddSection onSectionAdded={this.addSection} />
                </div>
                <div className='field'>
                    <div className='messages'>
                            <p>Messages</p>
                    </div>
                    <div className='history'>
                            <p>history</p>
                    </div>
                </div>
                    <SectionsScreen sections={sectionsData} />
            </div>
        )
    }
}
