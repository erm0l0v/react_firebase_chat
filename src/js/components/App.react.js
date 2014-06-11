/** @jsx React.DOM */

var React = require('react');
var Fluxxor = require('fluxxor');
var ChatList = require('./ChatList.react');
var MessageBox = require('./MessageBox.react');

var FluxMixin = Fluxxor.FluxMixin(React);
var StoreWatchMixin = Fluxxor.StoreWatchMixin;

var App = React.createClass({
    mixins: [FluxMixin, StoreWatchMixin("ChatStore")],

    getStateFromFlux: function() {
        var flux = this.getFlux();
        return {
            messages: flux.store("ChatStore").getState().messages || []
        };
    },

    render: function(){
        return (
            <div>
                <ChatList messages={this.state.messages} />
                <MessageBox onSubmit={this.sendMessage}/>
            </div>)
    },

    sendMessage: function(name, message){
        this.getFlux().actions.sendMessage(name, message);
    }
});

module.exports = App;