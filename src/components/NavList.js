import React from 'react';
import useQuery from '../common/useQuery';

export default function NavList({ selected, onClick }) {
  const [error, loading, data] = useQuery({
    url: 'https://mock.hellogustav.com/circles',
  });

  const handleClick = (circle) => {
    onClick(circle);
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
      <ul className="g-nav">
        <li>
          <div
            className={`g-nav-link ${selected === 'vendors' ? 'g-active' : ''}`}
            onClick={() => handleClick('vendors')}
          >
            All vendor partners
          </div>
        </li>
      </ul>

      <ul className="g-nav">
        <li className="g-nav-label">Circles</li>
        {data.circles.map((circle) => (
          <li key={circle.id}>
            <div
              className={`g-nav-link ${
                selected.id === circle.id ? 'g-active' : ''
              }`}
              onClick={() => handleClick(circle)}
            >
              {circle.name}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
