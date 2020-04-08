import { SET_MESSAGES, MESSAGE_POSTED } from '../actions';

const messagesReducer = (state = null, action) => {
  switch (action.type) {
    case SET_MESSAGES: {
      return action.payload.messages;
    }
    case MESSAGE_POSTED: {
      const copiedState = state.slice(0);
      copiedState.push(action.payload);
      return copiedState;
    }

    default:
      return state;
  }
};
export default messagesReducer;
