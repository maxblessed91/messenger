import React, { Component } from 'react';
import MessengerScreen from '../messenger-screen';
import NavMenu from '../nav-menu';
import AddMessageForm from '../add-message-form';


export default class CommunityQA extends Component {

    initialId = 3718;

    state = {
        messagesData3: [
            this.createMessage("My delivery hasn't arrived, what can I do?"),
            this.createMessage("Hello, what is the delivery time?"),
            this.createMessage("Hi, do you have this item in stock?"),
            this.createMessage("Does this come in the colour blue?")
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

        this.setState(( { messagesData3 } ) => {
            const newArr = [
                ...messagesData3,
                newItem
            ];

            return {
                messagesData3: newArr
            };
        });

    };

    UNSAFE_componentWillMount() {
        localStorage.getItem('messagesData3') && this.setState({
            messagesData3: JSON.parse(localStorage.getItem('messagesData3')),
        })
    }

    UNSAFE_componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('messagesData3', JSON.stringify(nextState.messagesData3));
    }

    render() {

        const { messagesData3 } = this.state;
        return (
            <div className='messenger'>
                <NavMenu />
                <div>
                    <MessengerScreen messages={messagesData3} />
                    <AddMessageForm onItemAdded={this.addItem}/>
                </div>

            </div>
        );
    };
}
