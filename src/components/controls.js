import React from 'react';
import FileSync from './controls/sync.js';
import Plc from './controls/plc.js';
import Ni from './controls/ni.js';
import Vfd from './controls/vfd.js';
import Pid from './controls/pid.js'
import Channels from './controls/channels.js'

class Controls extends React.Component {
  state = {
    tier1: undefined,
  }
  pickTier1 = (item) => {
    return () => {
      this.setState({tier1:item})
    }
  }

  render () {

    const Items = [
      {name: 'file_sync', slug: 'sync', component:<FileSync /> },
      {name: 'PLC', slug: 'plc', component:<Plc /> },
      {name: 'National Instruments', slug: 'ni', component:<Ni />},
      {name: 'VFD', slug: 'vfd', component:<Vfd />},
      {name: 'Watlow Controller', slug: 'watlow',},
      {name: 'Siemens', slug: 'siemens',},
      {name: 'PID Theory', slug:'pid', component:<Pid />},
      {name: 'Channel Types', slug:'channels', component:<Channels />},
      {name: 'AWS', slug: 'aws'},
      {name: 'Sneider', slug: 'sneider'},
      {name: 'Sea Level', slug: 'seaLevel'},
      {name: 'Beckoff', slug: 'beckoff'},
    ]
    const renderItems = Items.map(item => {
      return (
        <button
          key={item.slug}
          onClick={this.pickTier1(item.slug)}
          className={this.state.tier1 === item.slug ? "tier1 active" : "tier1"}
          >{item.name}</button>
      )
    })
    const tier1 = Items.filter(item => {
      return this.state.tier1 === item.slug;
    });
        const renderTier2Component = tier1[0] && tier1[0].component;
    return (
      <div>
      <ul>
        {renderItems}
        <hr />
        {renderTier2Component}
      </ul>
      </div>

    )
  }
}

export default Controls;
