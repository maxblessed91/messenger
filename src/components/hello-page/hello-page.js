import React from 'react';
import { Link } from 'react-router-dom';

import './hello-page.css';

const HelloPage = () => {
    return (
        <div className='page'>
        <div className='hello-page'>
            <div className='text-block'>
                <h1>Hello, dear guests!</h1>
                <h2>If you want to visit my little app, click the button below!</h2>
                <h3>Have a nice day! :)</h3>
            </div>
            <Link to='/messenger-screen/2' >
            <i class="fas fa-envelope-open-text fa-7x btn-intro"></i>
            </Link>
        </div>
        </div>
    )
}

export default HelloPage;
