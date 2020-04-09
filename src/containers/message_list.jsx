import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Message from '../components/message';
import MessageForm from '../containers/message_form';
import { setMessages } from '../actions';

class MessageList extends Component {
  componentWillMount() {
    this.fetchMessages();
  }
  componentDidMount() {
    this.refresher = setInterval(this.fetchMessages, 5000);
  }
  componentWillUnmount() {
    clearInterval(this.refresher);
  }

  fetchMessages = () => {
    this.props.setMessages(this.props.selectedChannel);
  }

  render () {
    return (
      <div className="channel-container">
        <div className="channel-title">
          <h2>Channel #{this.props.selectedChannel}</h2>
        </div>
        <div className="message-list">
          {this.props.messages.map((msg) => {
            return <Message key={msg.created_at} message={msg} />;
          })
          }
        </div>
        <MessageForm />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setMessages },
    dispatch
  );
}
function mapStateToProps(state) {
  return {
    messages: state.messages,
    selectedChannel: state.selectedChannel
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
