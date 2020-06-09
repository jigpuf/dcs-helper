import React from 'react';

class CCW extends React.Component {
  render () {
    return (
      <div>
      <h2>Connected Components Workbench</h2>
      <h3>Software Dependencies</h3>
        Windows 10 requires microsoft.net 3.5 Software Package 1<br />
        To find out if this is installed:<br />
        <ol>
          <li>Windows key(or Start) type <code>regedit</code> and open it</li>
          <li>Navigate to HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\NET Framework Setup\NDP\v3.5</li>
          <li>The subkey SP should show a 1</li>
          <li>If not, get the package</li>
        </ol>
      <h3>Incapatability</h3>
      Certain Software updates make the CCW not be able to open a new project<br />
        <a href='https://www.cbtcompany.com/product-notice-2019-01-002-microsoft-windows-security-update-causes-inability-to-open-projects-with-ccw-aadvance-isagraf-and-vmonitor-programming-environments' target='_blank'
        >List of bad security updates</a><br />
        To check your updates:
        <ol>
          <li>control panel &rarr; programs &rarr; programs and features &rarr; installed updates</li>
          <li>Search for the offending KB updates</li>
          <li>If they are there, get the patch to fix or download newest SSU</li>
        </ol>
      <h3>Hardware</h3>
      This works with the 800 series controllers
      </div>
    );
  }
}

export default CCW;
