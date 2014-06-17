/** @jsx React.DOM */

var React = require('react');

var MessageBox = React.createClass({

    propTypes: {
        onSubmit: React.PropTypes.func.isRequired
    },

    getInitialState: function(){
        return {
            name: '',
            message: '',
            createDate: ''
        }
    },

    render: function(){
        return (
            <form className="col-md-4" onSubmit={this.onSubmit}>
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
        this.state.createDate = new Date().toString();
        this.props.onSubmit(this.state.name, this.state.message, this.state.createDate);
        this.setState({message: ''});
    }
});

module.exports = MessageBox;