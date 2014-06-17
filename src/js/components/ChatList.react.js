/** @jsx React.DOM */

var React = require('react');
var ChatItem = require('./ChatItem.react');
var AutoScrollMixin = require('../mixins/AutoScrollMixin');

var ChatList = React.createClass({

    mixins: [AutoScrollMixin],

    render: function(){
        return (
            <ul className="pull-left col-md-8 chat-list">
                {this.props.messages.map(function(message){
                    var date = new Date(message.createDate);
                    date = date.getDay() + '/' + date.getMonth() + '/' + date.getFullYear() + ' ' + date.getHours() + ':' +date.getMinutes();
                    return <ChatItem name={message.name} text={message.message} createDate={date} />
                })}
            </ul>)
    }
});

module.exports = ChatList;