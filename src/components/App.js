import React from 'react';
import {ListPage} from 'pages';
import { Switch, Route } from 'react-router-dom';

const App =()=>{
    return (
        <div>
            <Switch>
                <Route path="/" component={ListPage}/>
            </Switch>
       </div>
      
    );
}

export default App;

