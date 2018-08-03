import React from 'react'

import { Switch, Route, Redirect} from 'react-router-dom';

import Todo from '../todo/todo'
import About from '../about/about'
import NotFound from '../notfound/notfound'

export default props => (
        <Switch>
           <Route path="/todos" component={Todo} />
           <Route path="/about" component={About} />
           <Redirect from="*" to="/todos" />
           <Route component={NotFound} />
        </Switch>
)
