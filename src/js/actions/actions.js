module.exports = {

    sendMessage: function(name, message){
        this.dispatch('SEND_MESSAGE', {name:name, message:message});
    }
};