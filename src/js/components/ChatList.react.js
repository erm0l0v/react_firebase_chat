/** @jsx React.DOM */

var React = require('react');
var ChatItem = require('./ChatItem.react');
var AutoScrollMixin = require('../mixins/AutoScrollMixin');

var ChatList = React.createClass({

    mixins: [AutoScrollMixin],

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