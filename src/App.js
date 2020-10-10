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
      <Toggle options={toggleOptions} active={scope} onChange={setScope} />
      PLACE FOR YOUR COMPONENT
    </div>
  );
}

export default App;
