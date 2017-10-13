import React, { Component } from 'react';
import{ connect } from 'react-redux';
import * as actions from '../../actions';

class Signout extends Component {
    //when user visits this route, as soon as this component
    //is about to get render, signout the user
    componentWillMount() {
        this.props.signoutUser();
    }

    render() {
        return <div>Sorry to see you go...</div>
    }
}

export default connect(null, actions) (Signout);