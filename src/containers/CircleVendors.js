import React from 'react';
import { AppContext } from '../common/appReducer';
import ListItem from '../components/ListItem';

export default function CircleVendors({ circle }) {
  const [state, dispatch] = React.useContext(AppContext);

  const isSelected = state.circles.some(iteree => iteree.id === circle.id);

  const handleVendorToggle = (value) => {
    dispatch({ type: 'TOGGLE_VENDOR', payload: { vendor: value } });
  };

  const handleCircleToggle = (value) => {
    dispatch({ type: 'TOGGLE_CIRCLE', payload: { circle: value } });
  };

  // Here we convert circle vendor list from String[] to Object[]
  // to reuse same Item list component. Backend actually should return Object[]
  // with vendor ID and vendor name
  const vendorList = circle.vendors.map(iteree => state.cache.vendors.find(vendor => vendor.id === iteree));

  return (
    <div>
      <div className="g-vendorlist-header">
        <label>{circle.name}</label>
        <button className="g-button" disabled={isSelected} onClick={() => handleCircleToggle(circle)}>Select entire circle</button>
      </div>
      <ul>
        {vendorList.map(item => (
          <ListItem
            key={item.id}
            item={item}
            onChange={() => handleVendorToggle(item)}
            checked={state.vendors.some(iteree => iteree.id === item.id)}
            checkable={!isSelected}
          />
        ))}
      </ul>
    </div>
  )
}
