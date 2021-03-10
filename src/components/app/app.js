import React, { Component } from 'react';
import MessengerScreen from '../messenger-screen';
import NavMenu from '../nav-menu';
import AddMessageForm from '../add-message-form';


import './app.css';

export default class App extends Component {

    initialId = 2718;

    state = {
        messagesData2: [
            this.createMessage("Hello, what is the delivery time?"),
            this.createMessage("Hi, do you have this item in stock?"),
            this.createMessage("Does this come in the colour blue?"),
            this.createMessage("My delivery hasn't arrived, what can I do?")
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

        this.setState(( { messagesData2 } ) => {
            const newArr = [
                ...messagesData2,
                newItem
            ];

            return {
                messagesData2: newArr
            };
        });

    };

    UNSAFE_componentWillMount() {
        localStorage.getItem('messagesData2') && this.setState({
            messagesData2: JSON.parse(localStorage.getItem('messagesData2')),
        })
    }

    UNSAFE_componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('messagesData2', JSON.stringify(nextState.messagesData2));
        }


    render() {

        const { messagesData2 } = this.state;
        return (
            <div className='messenger'>
                <NavMenu />
                <div>
                    <MessengerScreen messages={messagesData2} />
                    <AddMessageForm onItemAdded={this.addItem}/>
                </div>
            </div>
        );
    };
}
