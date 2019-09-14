import browser from 'webextension-polyfill';

const createReputationBox = trustLevel => {
  const container = document.createElement('div');
  container.style = `display: flex;
                     align-items: center;
                     justify-content: space-between;
                     min-height: 40px;
  `;
  const trustLevelIndicator = document.createElement('div');
  trustLevelIndicator.textContent = `${trustLevel}%`;
  const style = `padding: 4px;
    box-sizing: border-box;
    height: 80%;
    border-radius: 4px;
    margin-right: 8px;
    font-family: sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;`;
  trustLevelIndicator.style = style;

  let color, backgroundColor;
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
  trustLevelIndicator.style =
    style +
    ` color: ${color};
      background-color: ${backgroundColor}
    `;
  container.appendChild(trustLevelIndicator);

  const button = document.createElement('button');
  button.innerHTML =
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>';
  button.style = style;
  container.appendChild(button);
  container.classList.add('trustLevelContainer');
  return container;
};

let previousLength = 0;
const observer = new MutationObserver(() => {
  const tweets = document.querySelectorAll("[role='group']");
  if (tweets.length !== previousLength) {
    console.log(tweets.length);
    tweets.forEach(tweetButtonBar => {
      const buttons = tweetButtonBar.childNodes;
      if (!buttons[buttons.length - 1].classList.contains('trustLevelContainer')) {
        tweetButtonBar.appendChild(createReputationBox(Math.round(Math.random() * 100)));
      }
    });
  }
  previousLength = tweets.length;
});

observer.observe(document.body, {
  childList: true,
  attributes: true,
  subtree: true,
  characterData: true,
});
