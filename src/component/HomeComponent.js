import React, {Component} from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import SidebarComponent from './SidebarComponent';
import MessageComponent from './MessageComponent';

class HomeComponent extends Component {
    render() {
        return (    
            <div>                   
                <div>
                    <MessageComponent></MessageComponent>
                </div>                              
                <div className="home-main-content gradient-bg">
                    <div className="glass-overlay"></div>
                    <SidebarComponent></SidebarComponent>
                    <Container>
                        <Row>
                            <Col xl={{span:12,offset:0}} lg={{span:12,offset:0}} md={{ span: 10, offset: 1 }} sm={{span:12,offset:0}} xs={{span:12,offset:0}}>                                                                                                  
                                <div className="banner-name-sec">
                                    <Row>
                                        <Col className="text-center">
                                            <h1 className="animated fadeInDown anim-delay-3s cursive-font">Groom & Bride</h1>
                                            <p className="animated fadeInLeft anim-delay-6s small-font">We're getting married</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="animated fadeInUp anim-delay-9s text-center">                                                                                                
                                            <p className="date">25 February 2020</p>
                                        </Col>
                                    </Row>
                                </div>                                
                                
                            </Col>
                        </Row>
                    </Container>
                    <div className="circle1"></div>
                    <div className="circle2"></div>
                </div>                
            </div>       	
    	)
    }
}
    export default HomeComponent