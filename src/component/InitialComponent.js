import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Container,Row,Col,Image,Button} from 'react-bootstrap';

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
			<Container className="initial-bg">
	            <Row className="home-main-content ht-100" align="center">
	            	<Col md={12}>
		            	<NavLink to="/home"> 
		            		<Image onClick={this.lock} className="img-fluid invite-img animated fadeInDown" src="images/invite.png"/>		            		
		            	</NavLink>                               
	            	</Col>
	            </Row>
            </Container> 
		)
	}

}
export default InitialComponent