const API_URL = 'https://wagon-chat.herokuapp.com';
export const SET_MESSAGES = 'SET_MESSAGES';

export default function setMessages(channel) {
  const url = `${API_URL}/${channel}/messages`;
  const promise = fetch(url).then(r => r.json());

  return {
    type: SET_MESSAGES,
    payload: promise
  };
}
