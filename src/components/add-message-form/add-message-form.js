import React, { Component } from 'react';

import './add-message-form.css';

export default class AddMessageForm extends Component {

    state = {
        label: ''
    };

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.label.length < 1 || this.state.label[0] == ' ') {
            return alert('Please enter valid message');
        } else {
        this.props.onItemAdded(this.state.label);
        this.setState({
            label: ''
        });
    }
    };

    render() {
        return (
            <form className='add-message-form d-flex'
                    onSubmit={this.onSubmit}>
                <input type='text'
                        className='form-control'
                        onChange={this.onLabelChange}
                        placeholder='Type new message'
                        value={this.state.label} />
                <button
                    className='btn btn-outline-primary'>
                    Add
                </button>
            </form>
        );
    }
}
