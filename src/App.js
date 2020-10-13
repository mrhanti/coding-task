import React from 'react';
import './App.css';
import Toggle from './components/Toggle';
import Global from './containers/Global';
import Vendors from './containers/Vendors';
import Internal from './containers/Internal';
import { AppContext, appReducer } from './common/appReducer';
import usePublish from './common/usePublish';

const initialState = {
  global: false,
  internal: false,
  vendors: [],
  circles: [],
  cache: {},
};

const toScopeActionType = (scope) => ['SCOPE_CHANGE', scope.toUpperCase()].join('_');

function App() {
  const toggleOptions = [
    { id: 'global', label: 'Share globally on Gustav', icon: 'globe' },
    { id: 'vendors', label: 'Select vendors', icon: 'vendors' },
    { id: 'internal', label: 'Internal only', icon: 'internal' },
  ];
  const [loading, setLoading] = React.useState(false);
  const [state, dispatch] = React.useReducer(appReducer, initialState);
  const publish = usePublish({ url: 'https://mock.hellogustav.com/jobs' });

  const [scope, setScope] = React.useState('vendors');

  const handleScopeChange = (scope) => {
    setScope(scope);
    dispatch({ type: toScopeActionType(scope) });
  };

  const handleSubmit = async () => {
    setLoading(true);
    await publish({
      variables: {
        global: state.global,
        internal: state.internal,
        vendors: state.vendors.map(iteree => iteree.id),
        circles: state.circles.map(iteree => iteree.id),
      },
      onError(err) {
        setLoading(false);
        alert(err.message);
      },
      onComplete(response) {
        setLoading(false);
        alert('Published!');
      }
    });
  };

  // Facebook teams suggests to create separate context providers
  // for each value (state and dispatch), for the sake of simplifying things
  // in this app, I pass them both as array entries.

  return (
    <AppContext.Provider value={[state, dispatch]}>
      <div className="App g-container">
        <Toggle
          options={toggleOptions}
          active={scope}
          onChange={handleScopeChange}
        />
        {scope === 'global' && <Global />}
        {scope === 'vendors' && <Vendors />}
        {scope === 'internal' && <Internal />}
        <div className="g-footer">
          <button disabled={loading} className="g-button" type="submit" onClick={handleSubmit}>
            Publish
          </button>
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
