var Fluxxor = require('fluxxor');
require('firebase');
var Firebase = window.Firebase;

var ChatStore = Fluxxor.createStore({
    initialize: function(options) {
        this.messages = options.messages || [];
        var fb_url = options.fb_url || 'https://ermolov.firebaseio.com/';
        this._firebase = new Firebase(fb_url);
        this.bindActions('SEND_MESSAGE', this.handleSendMessage);
        this._startListener();
    },

    _startListener: function(){
        var self = this;
        this._firebase.limit(10).on('child_added', function (snapshot){
            var message = snapshot.val();
            self.messages.push(message);
            self.emit("change");
        });
    },

    getState: function() {
        return {
            messages: this.messages
        };
    },

    handleSendMessage: function(payload){
      this._firebase.push({name:payload.name, message:payload.message, createDate: payload.createDate});
    }

});

module.exports = ChatStore;