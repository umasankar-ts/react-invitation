import React, {Component} from 'react';

class MessageComponent extends Component{
	lockScreen(){
		 // if (window.screen.width < 830) {		 	
				document.documentElement.requestFullscreen();
				window.screen.orientation.lock('landscape').catch(function(error) {
    			//console.log('')
			});
		// }
	}
	render(){
		return(
		 	<div className="message" align="center">
                <h5 className="msg-content">Please rotate your phone</h5>
                <p className="msg-content">We don't support portrait mode. Please go back to landscape mode for the best experience.</p>
            	<button className="btn msg-btn" onClick={this.lockScreen}>Rotate Screen</button>
            </div>
		)
	}
}

export default MessageComponent