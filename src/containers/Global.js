import React from 'react';
import InfoBox from '../components/InfoBox';

export default function Global() {
  return (
    <div className="g-row">
      <div className="g-col">
        <ul className="g-nav">
          <li className="g-nav-label">Global</li>
        </ul>
      </div>
      <div className="g-col g-col-primary">
        <InfoBox
          icon="info"
          text="The job will only be visible to your internal team. You can share it to vendors or globally after it was published."
        />
      </div>
      <div className="g-col">
        <ul className="g-nav">
          <li className="g-nav-label">Global</li>
        </ul>
      </div>
    </div>
  );
}