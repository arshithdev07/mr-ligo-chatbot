import React from 'react';
import PropTypes from 'prop-types';

import TalkToCommunity from './TalkToCommunity';
import FeedbackForm from './FeedbackForm';


class LigoOptions extends React.Component  {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <TalkToCommunity></TalkToCommunity>
        <FeedbackForm></FeedbackForm>
      </div>
    );
  }
}

LigoOptions.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default LigoOptions;
