import React from 'react';

class Aws extends React.Component {
  render () {
    return (
      <div>
        <h2>AWS</h2>
        Sensor needs:<br />
        <table>
          <tr><th>Sensor Type</th><th>Model</th><th>Part Number</th><th>Notes</th></tr>
          <tr><td>CH4 Sensor</td><td>Draeger Polytron 8200 0-100LEL DD</td><td></td><td>Cheaper than Sensalert</td></tr>
          <tr><td>CH4 Sensor</td><td>Sensalert</td><td></td><td></td></tr>
          <tr><td>O2 Sensor</td><td>Draeger 8344403 Drager Polytron 8100EC</td><td></td><td></td></tr>
          <tr><td>Fire Detection</td><td>40/40UFL Ultra Fast UV/IR</td><td></td><td>20ms response time</td></tr>
          <tr><td>Open Path</td><td>Spectrex Quasar 902</td><td></td><td>Buy according to range</td></tr>
          <tr><td></td><td></td><td></td><td></td></tr>
          <tr><td></td><td></td><td></td><td></td></tr>
        </table>
      </div>
    );
  }
}

export default Aws;
