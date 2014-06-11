/** @jsx React.DOM */

var React = require('react');

var MessageBox = React.createClass({

    propTypes: {
        onSubmit: React.PropTypes.func.isRequired
    },

    getInitialState: function(){
        return {
            name: '',
            message: ''
        }
    },

    render: function(){
        return (
            <form className="form-horizontal" onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Name:</label>
                    <input type="text" name="name" className="form-control" value={this.state.name} onChange={this.handleChangeName} />
                </div>
                <div className="form-group">
                    <label>Message:</label>
                    <textarea name="message" className="form-control" value={this.state.message} onChange={this.handleChangeMessage}></textarea>
                </div>
                <button type="submit" className="btn btn-default">Submit</button>
            </form>)
    },

    handleChangeName: function(e){
        this.setState({name: e.target.value});
    },

    handleChangeMessage: function(e){
        this.setState({message: e.target.value});
    },

    onSubmit: function(e){
        e.preventDefault();
        this.props.onSubmit(this.state.name, this.state.message);
        this.setState({name: '', message: ''});
    }
});

module.exports = MessageBox;