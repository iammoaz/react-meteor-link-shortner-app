import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header.js';
import LinkForm from './components/link-form.js';
import { Links } from '../imports/collections/links';
import LinkList from './components/link-list.js';

const App = () => {
   return (
      <div>
         <Header />
         <LinkForm />
         <LinkList />
      </div>
   );
};

Meteor.startup(() => {
   ReactDOM.render(<App />, document.querySelector('.container'));
});
