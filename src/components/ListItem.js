import React from 'react';
import Logo from './Logo';

export default function ListItem({ item, checked, onChange, checkable }) {
  return (
    <li>
      <div className="g-vendorlist--item">
        <Logo name={item.name} size="large" />
        <div>{item.name}</div>
        <div>
          {checkable !== false && (
            <input
              type="checkbox"
              checked={checked}
              onChange={() => onChange(item)}
            />
          )}
        </div>
      </div>
    </li>
  );
}
