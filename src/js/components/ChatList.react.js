/** @jsx React.DOM */

var React = require('react');
var ChatItem = require('./ChatItem.react');

var ChatList = React.createClass({
    componentWillUpdate: function() {
        var node = this.getDOMNode();
        this.shouldScrollBottom = node.scrollTop + node.offsetHeight === node.scrollHeight;
    },

    componentDidUpdate: function() {
        if (this.shouldScrollBottom) {
            var node = this.getDOMNode();
            node.scrollTop = node.scrollHeight
        }
    },

    render: function(){
        return (
            <ul className="list-group chat-list">
                {this.props.messages.map(function(message){
                    return <ChatItem name={message.name} text={message.message} />
                })}
            </ul>)
    }
});

module.exports = ChatList;