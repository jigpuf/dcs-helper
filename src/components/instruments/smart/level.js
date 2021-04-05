import React from 'react';

class Level extends React.Component {
  render () {
    return (
      <div>
        <h2>Level Sensor</h2>
        Part#=NLS-3320<br />
        <img src='data:image/jpeg;base64,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'></img>
      </div>
    );
  }
}

export default Level;
