const API_URL = 'https://wagon-chat.herokuapp.com';
export const SET_MESSAGES = 'SET_MESSAGES';
export const MESSAGE_POSTED = 'MESSAGE_POSTED';

export function setMessages(channel) {
  const url = `${API_URL}/${channel}/messages`;
  const promise = fetch(url).then(r => r.json());

  return {
    type: SET_MESSAGES,
    payload: promise
  };
}

export function createMessage(channel, author, content) {
  const url = `${API_URL}/${channel}/messages`;
  const body = { author, content }; // ES6 destructuring
  const promise = fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(r => r.json());

  return {
    type: MESSAGE_POSTED,
    payload: promise // Will be resolved by redux-promise
  };
}
