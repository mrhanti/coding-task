import React from 'react';
import NavList from '../components/NavList';
import { AppContext } from '../common/appReducer';
import CircleVendors from './CircleVendors';
import AllVendors from './AllVendors';

function List({ label, data }) {
  if (data.length === 0) {
    return null;
  }

  return (
    <ul className="g-nav">
      <li className="g-nav-label">
{`${label} ${data.length}`}
{' '}
 </li>
      {data.map((iteree) => (
        <li key={iteree.id}>
          <div>{iteree.name}</div>
        </li>
      ))}
    </ul>
  );
}

export default function Vendors() {
  const [scope, setScope] = React.useState('vendors');
  const [state, dispatch] = React.useContext(AppContext);

  const handleUnselectAll = () => {
    dispatch({
      type: 'UNSELECT_ALL',
    });
  };

  const allowUnselectAll = state.vendors.length > 0 || state.circles.length > 0;

  return (
    <>
      <div className="g-row">
        <div className="g-col">
          <NavList selected={scope} onClick={setScope} />
        </div>
        <div className="g-col g-col-primary">
          {scope === 'vendors' ? (
            <AllVendors />
          ) : (
            <CircleVendors circle={scope} />
          )}
        </div>
        <div className="g-col">
          {allowUnselectAll && (
            <button
              className="g-button"
              type="button"
              onClick={handleUnselectAll}
            >
              Unselect all
            </button>
          )}
          <List label="Vendors" data={state.vendors} />
          <List label="Circles" data={state.circles} />
        </div>
      </div>
    </>
  );
}
