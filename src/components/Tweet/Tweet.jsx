import React from 'react';

export default ({ trustLevel, tweetUser, date }) => {
  let color;
  let backgroundColor;
  if (trustLevel > 0) {
    backgroundColor = '#FA0000';
    color = 'white';
  }
  if (trustLevel > 30) {
    backgroundColor = '#555655';
    color = 'white';
  }
  if (trustLevel > 75) {
    backgroundColor = '#158F00';
    color = 'white';
  }
  return (
    <tr>
      <td>
        @{tweetUser} on {date}
      </td>
      <td style={{ verticalAlign: 'middle' }}>
        <span
          style={{
            display: 'inline-block',
            backgroundColor: backgroundColor,
            color: color,
            borderRadius: 4,
            padding: 2,
            textAlign: 'right',
          }}
        >
          {trustLevel}%
        </span>
      </td>
    </tr>
  );
};
