import React from 'react';
import useQuery from '../common/useQuery';
import { AppContext } from '../common/appReducer';
import ListItem from '../components/ListItem';

export default function AllVendors() {
  const [error, loading, data] = useQuery({
    url: 'https://mock.hellogustav.com/vendors',
  });
  const [state, dispatch] = React.useContext(AppContext);

  const handleChange = (vendor) => {
    dispatch({ type: 'TOGGLE_VENDOR', payload: { vendor } });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  if (!data) {
    return <div />;
  }

  return (
    <div>
      <div>Vendors</div>
      <ul>
        {data.vendors.map((item) => (
          <ListItem
            key={item.id}
            item={item}
            checked={state.vendors.some((iteree) => iteree.id === item.id)}
            onChange={handleChange}
          />
        ))}
      </ul>
    </div>
  );
}
