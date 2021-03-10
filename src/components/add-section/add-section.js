import React, { Component } from 'react';

import './add-section.css';

export default class AddSection extends Component {

    render() {
        return (
            <button className='add-section'
            onClick={() => this.props.onSectionAdded(`New Section`)}><i className="fas fa-plus"></i></button>
        );
    }
}
