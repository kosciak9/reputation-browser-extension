import React from 'react';
import ReactDOM from 'react-dom';
import './popup.module.css';
import Tweet from './components/Tweet';

const Popup = () => (
  <div styleName="container" style={{ width: 400, padding: 16 }}>
    <h3 style={{ marginTop: 8 }}>Reputation - tweets you're watching:</h3>
    <table style={{ width: '100%', marginTop: 8, marginBottom: 8, borderSpacing: 0 }}>
      <thead>
        <tr>
          <th>Tweet</th>
          <th>Trust level</th>
        </tr>
      </thead>
      <tbody>
        <Tweet tweetUser="someone" trustLevel="80" date="12.01.2019" />
        <Tweet tweetUser="otherguy" trustLevel="47" date="10.01.2019" />
        <Tweet tweetUser="thatskindabad" trustLevel="27" date="03.01.2019" />
      </tbody>
    </table>
  </div>
);

const root = document.createElement('div');
document.body.appendChild(root);

ReactDOM.render(<Popup />, root);
