/** @jsx React.DOM */

var React = require('react');
var App = require('./components/App.react');
var Fluxxor = require('fluxxor');
var actions = require('./actions/actions');
var ChatStore = require('./stores/ChatStore');

window.React = React;

var stores = {
    ChatStore: new ChatStore()
};

var flux = new Fluxxor.Flux(stores, actions);

React.renderComponent(
    <App flux={flux}></App>,
    document.getElementById('main-app')
);
