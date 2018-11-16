import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

@withRouter
class AuthRoute extends React.Component {
    componentDidMount() {
        axios.get('/user/info').then(res => {
            if(res.data.code !== 0) {
                this.props.history.push('/login');
            }
        });
    }
    render() {
        return null
    }
}

export default AuthRoute