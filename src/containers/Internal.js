import React from 'react';
import Infobox from '../components/InfoBox';

export default function Internal() {
  return (
    <div className="g-row">
      <div className="g-col">
        <ul className="g-nav">
          <li className="g-nav-label">Internal</li>
        </ul>
      </div>
      <div className="g-col g-col-primary">
        <Infobox
          icon="info"
          text="The job will only be visible to your internal team. You can share it to vendors or globally after it was published."
        />
      </div>
      <div className="g-col">
        <ul className="g-nav">
          <li className="g-nav-label">Internal only</li>
        </ul>
      </div>
    </div>
  );
}