var AutoScrollMixin = {
    componentWillUpdate: function() {
        var node = this.getDOMNode();
        this.shouldScrollBottom = node.scrollTop + node.offsetHeight === node.scrollHeight;
    },

    componentDidUpdate: function() {
        if (this.shouldScrollBottom) {
            var node = this.getDOMNode();
            node.scrollTop = node.scrollHeight
        }
    }
};

module.exports = AutoScrollMixin;