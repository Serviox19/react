import React from 'react';
import ReactDOM from 'react-dom';
import {mount} from 'react-mounter';

import {MainLayout} from '../layouts/main-layout.jsx';
import Home from '../views/Home.jsx';
import {Me} from '../views/Me.jsx';

FlowRouter.route('/', {
  action() {
    mount(MainLayout, {
      content: (<Home />)
    });
  }
});

FlowRouter.route('/me', {
  action() {
    mount(MainLayout ,{
      content: (<Me />)
    })
  }
});
