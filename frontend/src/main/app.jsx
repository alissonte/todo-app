import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/font-awesome/css/font-awesome.min.css'

import React from 'react'
import {BrowserRouter as Router } from 'react-router-dom';

import Menu from '../template/menu'
import Routes from '../main/routes'


export default props => (
    <Router>
       <div className='container'>
          <Menu />
          <Routes />
       </div>
    </Router>
)