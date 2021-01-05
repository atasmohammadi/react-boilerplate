import React from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Home from './Home';

export default function App(): JSX.Element {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/">
                        {/* 
                        //@ts-ignore */}
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}