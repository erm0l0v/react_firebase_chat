/** @jsx React.DOM */

var React = require('react');

var ChatItem = React.createClass({

    render: function(){
        return (
            <li className="list-group-item">
                <h4 className="chat-user-name">{this.props.name}</h4>
                <span className="pull-right">{this.props.createDate}</span>
                <p className="chat-message">{this.props.text}</p>
             </li>)
    }

});

module.exports = ChatItem;