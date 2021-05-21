import React, {Component} from 'react';
import {Container,Row,Col,Image} from 'react-bootstrap';
import SidebarComponent from './SidebarComponent';
import MessageComponent from './MessageComponent';

class GalleryComponent extends Component {
    render() {
        return (    
            <div>                   
                <div>
                    <MessageComponent></MessageComponent>
                </div>
                <div id="gallery" className="content-wrapper">
                    <SidebarComponent></SidebarComponent> 
                    <Container>
                    	<Row className="align-items-center">
	                    	<Col xl={12} className="text-center title-section">
	                            <h2 className="title-name cursive-font">Gallery</h2>
	                            <Image src="images/title-border.png"/>
	                        </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}
export default GalleryComponent
