module.exports = {

    sendMessage: function(name, message, createDate){
        this.dispatch('SEND_MESSAGE', {name:name, message:message, createDate:createDate});
    }
};