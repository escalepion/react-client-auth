import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class SignOut extends Component {
    componentWillMount() {
        this.props.signoutUser();
    }

    render() {
        return <div>Sorry to see u go...</div>;
    }
}

export default connect(null, actions)(SignOut);