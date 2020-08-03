import React from "react";
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import SpeechRecognition from "react-speech-recognition";
import Say from 'react-say';

import App from './App.js';

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';


const options = {
  autoStart: false
}

const propTypes = {
  classes: PropTypes.object,
  transcript: PropTypes.string,
  resetTranscript: PropTypes.func,
  browserSupportsSpeechRecognition: PropTypes.bool
};

class Dictaphone extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: ""
    }
    this.getVoiceAsText = this.getVoiceAsText.bind(this);
    this.resetResult = this.resetResult.bind(this);
    this.startListening = this.startListening.bind(this);

  }

  resetResult() {
      this.props.resetTranscript();
      this.props.dispatch({
                 type: 'SEARCH_ITEM_ACTION',
                 payload: ""
             });
      this.props.dispatch({
                  type: 'SAY_ACTION',
                  payload: ""
            });
  }

  startListening() {
    this.props.startListening();
  }

  getVoiceAsText() {
    const voiceAsText = this.props.transcript;

    this.props.dispatch({
               type: 'SEARCH_ITEM_ACTION',
               payload: this.props.transcript
           });
    this.props.stopListening();
  }

  render() {
    const { transcript,resetTranscript,browserSupportsSpeechRecognition,startListening,classes,result } = this.props;

    if (!browserSupportsSpeechRecognition) {
      return null;
    }

    return (
      <div>
        <img width="1250" height="595" src="assets/background.PNG"/>
        <App
             transcript = {transcript}
             resetTranscript = {this.resetResult}
             result = {this.state.result}
             startListening = {this.startListening}
             getVoiceAsText = {this.getVoiceAsText}
        />
      <Say pitch={ 1.1 }
           rate={ 1 }
           speak={result}/>
      </div>
    );
  }
};

function mapStateToProps(state) {
  console.log('state - Speech Recognition',state);
  return {
    result : state.sayResult
  };
}

Dictaphone.propTypes = propTypes;
export default connect(mapStateToProps) (SpeechRecognition(options)(Dictaphone));
