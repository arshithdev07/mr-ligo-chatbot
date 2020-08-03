import React, {Component} from 'react';
import Header from './Header'
import Main from './Main'
import PropTypes from "prop-types";
import LigoChatbot from "./chatbot/LigoChatbot";

class App extends Component {
  render() {
    return (
      <div>
        {/* <Header transcript = {this.props.transcript}
                startListening = {this.props.startListening}
                getVoiceAsText = {this.props.getVoiceAsText}
                resetTranscript = {this.props.resetTranscript}/> */}
        <LigoChatbot  />

        {/* <Main resetTranscript = {this.props.resetTranscript}/> */}

        
      </div>
    )
  }
}

 App.propTypes = {
  transcript: PropTypes.string,
  resetTranscript: PropTypes.func,
  result: PropTypes.string,
  startListening:PropTypes.func,
  getVoiceAsText:PropTypes.func
};

export default App;
