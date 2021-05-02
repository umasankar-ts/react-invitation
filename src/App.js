import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import InitialComponent from './component/InitialComponent';
import HomeComponent from './component/HomeComponent';



class App extends Component {
    render(){
        return (            
            <Router>

                    <Switch>
                        <Route path="/" exact component={InitialComponent}/> 
                        <Route path="/home" component={HomeComponent}/>                         
                    </Switch>
                
            </Router>                
        )
    }
}

export default App;
