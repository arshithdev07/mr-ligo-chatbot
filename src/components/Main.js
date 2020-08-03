import React from 'react'
import PropTypes from 'prop-types';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import LigoOptions from './LigoOptions'

const Main = (props) => (
  <div>
    <BrowserRouter>
    <Switch>
      <Route exact path='/'  render={(props) => <LigoOptions {...props}/>}/>
    </Switch>
      </BrowserRouter>
  </div>
)

Main.propTypes = {
 classes: PropTypes.object.isRequired,
 resetTranscript:PropTypes.func
};

export default Main
