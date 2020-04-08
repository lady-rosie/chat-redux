import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Message from '../components/message';
// import setMessages from '../actions';

class MessageList extends Component {
  // componentWillMount() {
  //   this.props.setMessages();
  // }
  initialState = {
    messages: [
      {
        author: "anonymous92",
        content: "Hello world!",
        created_at: "2017-09-26T23:03:16.365Z"
      },
      {
        author: "anonymous77",
        content: "My name is anonymous77",
        created_at: "2017-09-26T23:03:21.194Z"
      }
    ]
  };

  render () {
    return (
      <div className="message-list">
        {this.initialState.messages.map((msg) => {
          return (
            <Message key={msg.created_at} message={msg} />);
        }
        )}
      </div>
    );
  }
}
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(
//     { setMessages },
//     dispatch
//   );
// }
function mapStateToProps(state) {
  return {
    messages: state.messages
  };
}

export default connect(mapStateToProps)(MessageList);
