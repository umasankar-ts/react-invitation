import React, {Component} from 'react';
import {Container,Row,Col,Card,Image} from 'react-bootstrap';
import SidebarComponent from './SidebarComponent';
import MessageComponent from './MessageComponent';

class WeddingComponent extends Component {
    render() {
        return (    
            <div>                   
                <div>
                    <MessageComponent></MessageComponent>
                </div>
                <div id="wed-comp" className="content-wrapper">
                    <SidebarComponent></SidebarComponent> 
                    <Container>
                        <Row className="align-items-center">
                            <Col xl={{span:10,offset:1}} md={{span:12,offset:0}} xs={{span:12,offset:0}}>
                            	<Row className="align-items-center">
                                    <Col xl={12} className="text-center title-section">
                                        <h2 className="title-name cursive-font">Happy Couple</h2>
                                        <Image src="images/title-border.png"/>
                                    </Col>
                            		<Col xl={4} md={4} sm={5} xs={6} className="animated fadeInDown">
                                        <Image className="floral-border1" src="images/profile-border1.png"/>
                            			<Card className="card-shadow overlay-box">                                            									  	
    								  		<Card.Body>									    		
    							    			<Card.Img src="images/groom.png" className="img-fluid profile-img"/>									    
    								  		</Card.Body>
                                            <div className="overlay-box-content">
                                                <h3 className="title">Groom</h3>
                                            </div>
    									</Card>
                            		</Col>
                            		<Col xl={8} md={8} sm={7} xs={6} className="animated fadeInRight">
                            			<div className="groom-details">
                            				<Image className="heart-img" src="images/heart.png"/>
    	                        			<h3 className="cursive-font">Groom</h3>
    	                        			<p className="couple-info normal-font">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            			</div>
                            		</Col>
                            	</Row>
                                <Row className="mt-5 align-items-center">
                                    <Col xl={8} md={8} sm={7} xs={6} className="text-right animated fadeInLeft">                                   
                                        <div className="bride-details">
                                            <Image className="heart-img" src="images/heart.png"/>
                                            <h3 className="cursive-font">Bride</h3>
                                            <p className="couple-info normal-font">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                        </div>
                                    </Col>
                                    <Col xl={4} md={4} sm={5} xs={6} className="animated fadeInDown">
                                        <Image className="floral-border2" src="images/profile-border2.png"/> 
                                        <Card className="card-shadow overlay-box">                                                                                
                                            <Card.Body>                                             
                                                <Card.Img src="images/bride.png" className="img-fluid profile-img"/>                                        
                                            </Card.Body>
                                            <div className="overlay-box-content">
                                                <h3 className="title">Bride</h3>
                                            </div>
                                        </Card>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}
export default WeddingComponent