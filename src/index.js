import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import MyQuestionsScreen from './components/my-questions-screen/my-questions-screen';
import App from './components/app/app';
import CommunityQA from './components/community-qa-screen/community-qa-screen';
import FAQScreen from './components/faq-screen/faq-screen';
import HelloPage from './components/hello-page/hello-page';

ReactDOM.render(
    <Router>
        <Route path='/' component={HelloPage}
        exact/>
        <Route path='/messenger-screen/1' component={MyQuestionsScreen} />
        <Route path='/messenger-screen/2' component={App} />
        <Route path='/messenger-screen/3' component={CommunityQA} />
        <Route path='/messenger-screen/4' component={FAQScreen} />
    </Router>,
    document.getElementById('root')
);
