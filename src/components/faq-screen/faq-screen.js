import React, { Component } from 'react';
import MessengerScreen from '../messenger-screen';
import NavMenu from '../nav-menu';
import AddMessageForm from '../add-message-form';


export default class FAQScreen extends Component {

    initialId = 1;

    state = {
        messagesData4: [
            this.createMessage("If you have questions, add a new message in a form below")
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

        this.setState(( { messagesData4 } ) => {
            const newArr = [
                ...messagesData4,
                newItem
            ];

            return {
                messagesData4: newArr
            };
        });

    };

    UNSAFE_componentWillMount() {
        localStorage.getItem('messagesData4') && this.setState({
            messagesData4: JSON.parse(localStorage.getItem('messagesData4')),
        })
    }

    UNSAFE_componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('messagesData4', JSON.stringify(nextState.messagesData4));
    }

    render() {

        const { messagesData4 } = this.state;
        return (
            <div className='messenger'>
                <NavMenu />
                <div>
                    <MessengerScreen messages={messagesData4} />
                    <AddMessageForm onItemAdded={this.addItem}/>
                </div>
            </div>
        );
    };
}
