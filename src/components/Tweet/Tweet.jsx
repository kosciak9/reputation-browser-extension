import React from 'react';
import browser from 'webextension-polyfill';

export default ({ trustLevel, tweetUser, date }) => {
  let backgroundColor = '#FA0000';
  let color = 'white';
  if (trustLevel > 30) {
    backgroundColor = '#555655';
    color = 'white';
  }
  if (trustLevel > 75) {
    backgroundColor = '#158F00';
    color = 'white';
  }
  return (
    <tr
      style={{
        cursor: 'pointer',
      }}
      onClick={() => {
        const creating = browser.tabs.create({
          url: 'http://localhost:3000/tweet/1',
        });
        creating.then(success => console.log(success)).catch(error => console.error(error));
      }}
    >
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
