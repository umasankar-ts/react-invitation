import React, {Component} from 'react';
import './App.css';
import './css/responsive.css';
import './css/animate.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import InitialComponent from './component/InitialComponent';
import HomeComponent from './component/HomeComponent';
import WeddingComponent from './component/WeddingComponent';
import EventComponent from './component/EventComponent';
import GalleryComponent from './component/GalleryComponent';
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends Component {
    render(){
        return (            
            <Router>
                <Switch>
                    <Route path="/" exact component={InitialComponent}/> 
                    <Route path="/home" component={HomeComponent}/>   
                    <Route path="/wedding-couple" component={WeddingComponent}/>
                    <Route path="/wedding-event" component={EventComponent}/>
                    <Route path="/gallery" component={GalleryComponent}/>                       
                </Switch>                
            </Router>                
        )
    }
}

export default App;
