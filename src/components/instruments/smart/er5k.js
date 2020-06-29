import React from 'react';

class Er5k extends React.Component {
  render () {
    return (
      <div>
      <li>Installation</li><hr/>
      <li>Calibration</li>
      Software: ER Tune<br/>
      Needed information: ER Type, Pancake Type, Feedback internal/external, Diaphram protection
       and limits disabled<hr/>
      <li>Troubleshooting:</li><hr/>
      <li>Ordering:</li><hr/>



      <h3>Information</h3>
        Model:<br />
        Part Number:<br />
        Manufacturer website<br />
        Videos:<br />
        Manual:<br />
        <a href='https://www.emerson.com/documents/automation/manual-er5000-user-manual-tescom-en-123612.pdf'
        >ER5K Manual</a><br />
        <li>P.95 current operated external feedback not monitored</li>
        <li>P.97 Voltage operated external feedback not monitored</li>
        <li>P.98 Current Operated external feedback monitored floating input with Current Input Card</li>
        <li>P.99 Current Operated external feedback monitored ground reference with Current Input Card</li>
        <li>P.100 Current Operated external Feedback monitored with Voltage Input card</li>
        <li>P.102 Voltage Operated external feedback monitored with Voltage Input Card</li>
      <h3>Physical Setup</h3>
        Circuit Diagram:<br />
        Mounting:<br />
        Pinouts:<br />
          <table>
            <tr><th>J3 Pin</th><th>Wire Color</th><th>Function</th><th>10MS Connector Pin</th></tr>
            <tr><th>1</th><td>Brown</td><td>(+) Setpoint Input</td><th>C</th></tr>
            <tr><th>2</th><td>Red</td><td>(-) Setpoint Input</td><th>D</th></tr>
            <tr><th>3</th><td>Orange</td><td>(+) Feedback input</td><th>G</th></tr>
            <tr><th>4</th><td>Yellow</td><td>(-) Feedback Input</td><th>H</th></tr>
            <tr><th>5</th><td>Green</td><td>(-) RS485 network</td><th>F</th></tr>
            <tr><th>6</th><td>Blue</td><td>(+) RS485 network</td><th>E</th></tr>
            <tr><th>7</th><td>Violet</td><td>(+) 24v DC Power</td><th>A</th></tr>
            <tr><th>8</th><td>Gray</td><td>(-) 24v DC Return</td><th>B</th></tr>
            <tr><th>9</th><td>White</td><td>(+)5v output (5mA max)</td><th></th></tr>
            <tr><th>10</th><td>Black</td><td>analog Signal/ Board Ground</td><th></th></tr>
            <tr><th>11</th><td>Pink</td><td>Analog Signal Output</td><th></th></tr>
            <tr><th>12</th><td>Tan</td><td>Analog Signal/Board Ground</td><th></th></tr>
          </table>
        Connectors<br />
      <h3>Setup</h3>
        Software<br />
        ER Tune<br />
        Paramaters<br />
      <h3>Calibration</h3>
      <h3>Troubleshooting</h3>
        Simulate Instrument:<br />
        Instrument Checkout:<br />
      <h3>Adding to software</h3>
      </div>
    );
  }
}

export default Er5k;
