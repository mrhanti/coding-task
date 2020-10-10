import React from 'react';
import './App.css';
import Icon from './Icon';
import InfoBox from './InfoBox';
import Logo from './Logo';
import Toggle from './Toggle';

function App() {
  const toggleOptions = [
    {id: 'global', label: 'Share globally on Gustav', icon: 'globe'},
    {id: 'vendors', label: 'Select vendors', icon: 'vendors'},
    {id: 'internal', label: 'Internal only', icon: 'internal'}
  ]

  const [scope, setScope] = React.useState('global');

  return (
    <div className="App">
      Components overview (remove when not needed):
      <br />
      <br />
      <Toggle options={toggleOptions} active={scope} onChange={setScope} />
      <br />
      <div style={{ width: '32px' }}><Icon icon="clock" color="green" /></div>
      <br />
      <Logo name="Company" size="large" />
      <Logo name="Another company" size="small" />
      <br />
      <InfoBox text="Attention, attention! This is a box containing important warning" icon="warning" />
      <br />
    </div>
  );
}

export default App;
