import React from 'react';

class Links extends React.Component {
  render () {
    return (
      <div>
        <h2>Links</h2>
          <table>
            <tr><th>Link Type</th></tr>
            <tr><td><a href='#confluence'>Confluence pages</a></td></tr>
            <tr><td><a href='#GUIs'>GUIs</a></td></tr>
            <tr><td></td></tr>
            <tr><td></td></tr>
            <tr><td></td></tr>
          </table>
          <table id='confluence'>
            <tr><th>Confluence Pages</th><th>raw Link</th></tr>
            <tr><td><a href='https://confluence/display/TAC/BOCA+Chica+DCS+Support+Page'>Boca Chica</a></td><td>https://confluence/display/TAC/BOCA+Chica+DCS+Support+Page</td></tr>
            <tr><td></td><td></td></tr>
            <tr><td></td><td></td></tr>
            <tr><td></td><td></td></tr>
            <tr><td></td><td></td></tr>

          </table>
          <table id='GUIs'>
            <tr><th>GUIs</th></tr>
            <tr><td></td></tr>
            <tr><td></td></tr>
            <tr><td></td></tr>
            <tr><td></td></tr>
            <tr><td></td></tr>
          </table>
      </div>
    );
  }
}

export default Links;
