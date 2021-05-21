import React, {Component} from 'react';
import {Container,Row,Col,Card,Image} from 'react-bootstrap';
import SidebarComponent from './SidebarComponent';
import MessageComponent from './MessageComponent';

class EventComponent extends Component {
    render() {
        return (    
            <div>                   
                <div>
                    <MessageComponent></MessageComponent>
                </div>
                <div id="event" className="content-wrapper">
                    <SidebarComponent></SidebarComponent> 
                    <Container className="event-sec">
                    	<Row className="align-items-center">
	                    	<Col xl={12} className="text-center title-section">
	                            <h2 className="title-name cursive-font">Wedding Venue</h2>
	                            <Image src="images/title-border.png"/>
	                        </Col>
                        </Row>
                    	<Row className="align-items-center">
                    		<Col xl={6} md={6} sm={12} className="mt-4 animated fadeInLeft">
                    			<Card>                                                                                 
                                	<Card.Body>  
                                		<h4 className="cursive-font text-center">Groom Venue</h4>
                                		<Row className="align-items-center mt-4">
	                                		<Col xl={12} md={12}>
	                                			<p className="event-details-content"><i className="lni-apartment event-card-icon"></i>Hall Name</p>
	                                			<p className="event-details-content"><i className="lni-map-marker event-card-icon"></i>Location</p>
	                                			<p className="event-details-content"><i className="lni-calendar event-card-icon"></i>Date</p>
	                                			<p className="event-details-content"><i className="lni-alarm-clock event-card-icon"></i>Time</p>
	                                		</Col>
	                                		<Col xl={12} md={12} className="mt-4">
	                                			<div>
	                                			<iframe width="100%" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=350&amp;hl=en&amp;q=Star%20park,%20Anna%20Nagar+(Wedding%20Hall)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
	                                			</div>
	                                		</Col>
                                		</Row>
                                	</Card.Body>
                            	</Card> 
                    		</Col>
                    		<Col xl={6} md={6} sm={12} className="mt-5 animated fadeInRight">
                    			<Card>                                                                                
                                	<Card.Body>  
                                		<h4 className="cursive-font text-center">Bride Venue</h4>
                                		<Row className="align-items-center mt-4">
	                                		<Col xl={12} md={12}>
	                                			<p className="event-details-content"><i className="lni-apartment event-card-icon"></i>Hall Name</p>
	                                			<p className="event-details-content"><i className="lni-map-marker event-card-icon"></i>Location</p>
	                                			<p className="event-details-content"><i className="lni-calendar event-card-icon"></i>Date</p>
	                                			<p className="event-details-content"><i className="lni-alarm-clock event-card-icon"></i>Time</p>
	                                		</Col>
	                                		<Col xl={12} md={12} className="mt-4">
	                                			<div>
	                                			<iframe width="100%" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=350&amp;hl=en&amp;q=Star%20park,%20Anna%20Nagar+(Wedding%20Hall)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
	                                			</div>
	                                		</Col>
                                		</Row>
                                	</Card.Body>
                            	</Card> 
                    		</Col>
                    	</Row>
                    </Container>
                </div>
            </div>
        )
    }
}
export default EventComponent