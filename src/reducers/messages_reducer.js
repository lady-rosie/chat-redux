import { SET_MESSAGES } from '../actions';

const messagesReducer = (state = null, action) => {
  switch (action.type) {
    case SET_MESSAGES:
      return action.payload.messages;
    default:
      return state;
  }
};
export default messagesReducer;
