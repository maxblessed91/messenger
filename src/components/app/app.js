import React, { Component } from 'react';
import MessengerScreen from '../messenger-screen';
import NavMenu from '../nav-menu';
import AddMessageForm from '../add-message-form';



import './app.css';

export default class App extends Component {
    // const messagesData = [
    //     {label: 'Hello, what is the delivery time?'},
    //     {label: 'Hi, do you have this item in stock?'}
    // ];

    initialId = 2718;

    state = {
        messagesData: [
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

        this.setState(( { messagesData } ) => {
            const newArr = [
                ...messagesData,
                newItem
            ];

            return {
                messagesData: newArr
            };
        });

    };

    UNSAFE_componentWillMount() {
        localStorage.getItem('messagesData') && this.setState({
            messagesData: JSON.parse(localStorage.getItem('messagesData')),
        })
    }

    UNSAFE_componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('messagesData', JSON.stringify(nextState.messagesData));
        }

render() {

    const { messagesData } = this.state;

    return (
        <div className='messenger'>
            <NavMenu />
            <div>
                <MessengerScreen messages={messagesData} />
                <AddMessageForm onItemAdded={this.addItem}/>
            </div>

        </div>
    );
};
}
