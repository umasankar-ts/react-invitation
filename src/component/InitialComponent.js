import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class InitialComponent extends	Component{
	lock(){
		 if (window.screen.width < 830) {		 	
				document.documentElement.requestFullscreen();
				window.screen.orientation.lock('landscape').catch(function(error) {
    			//console.log('')
			});
		}
	}
	render(){
		return(
			<div className="initial-bg primary-dark-bg">
	            <div className="fingerprint-section text-center w-100">
	            	<NavLink to="/home"> 
	            		<label onClick={this.lock}>Click Here</label>
	            	</NavLink>                               
	            </div>
            </div> 
		)
	}

}
export default InitialComponent