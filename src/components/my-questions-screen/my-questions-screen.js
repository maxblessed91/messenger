import React, { Component } from 'react';

import MessengerScreen from '../messenger-screen';
import NavMenu from '../nav-menu';
import AddMessageForm from '../add-message-form';


export default class MyQuestionsScreen extends Component {

    initialId = 1718;

    notificationsID = 85;

    state = {
        messagesData1: [
            this.createMessage("Does this come in the colour blue?"),
            this.createMessage("My delivery hasn't arrived, what can I do?"),
            this.createMessage("Hello, what is the delivery time?"),
            this.createMessage("Hi, do you have this item in stock?")
        ]
    };

    createMessage(label) {
        return {
            label,
            id: 'Q' + this.initialId++
        }
    }

    addItem = (text) => {
        const newItem = this.createMessage(text);

        this.setState(( { messagesData1 } ) => {
            const newArr = [
                ...messagesData1,
                newItem
            ];

            return {
                messagesData1: newArr
            };
        });

    };

    UNSAFE_componentWillMount() {
        localStorage.getItem('messagesData1') && this.setState({
            messagesData1: JSON.parse(localStorage.getItem('messagesData1')),
        })
    }

    UNSAFE_componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('messagesData1', JSON.stringify(nextState.messagesData1));
    }

    render() {
        const { messagesData1 } = this.state;

        return (
            <div className='messenger'>
                <NavMenu />
                <div>
                    <MessengerScreen messages={messagesData1} />
                    <AddMessageForm onItemAdded={this.addItem}/>
                </div>
            </div>
        );
    };
}
