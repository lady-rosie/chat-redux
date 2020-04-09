import { CHANNEL_SELECTED } from '../actions';

const selectedChannelReducer = (state = null, action) => {
  switch (action.type) {
    case CHANNEL_SELECTED: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};
export default selectedChannelReducer;

