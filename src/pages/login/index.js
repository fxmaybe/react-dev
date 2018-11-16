import React from 'react';
import { withRouter } from 'react-router-dom';
import { getRedirectPath } from './../../assets/js/utils';
import axios from 'axios';
import { Button, WingBlank, InputItem, WhiteSpace, Toast} from 'antd-mobile';
import logo from './../../assets/images/yy.jpg';
import './index.less';

@withRouter
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      pwd: '',
      loginLoading: false
    }
  }

  goRegister= () => {
    this.props.history.push('/register');
  }
  nameChange = (name) => {
    this.setState({
      name
    });
  }
  pwdChange = (pwd) => {
    this.setState({
      pwd
    });
  }
  loginSubmit = () => {
    if(this.state.name === '') {
      Toast.info('请输入用户名', 2, null, false);
      return;
    }
    if(this.state.pwd === '') {
      Toast.info('请输入密码', 2, null, false);
      return;
    }
    this.setState({
      loginLoading: true
    });
    axios.post('user/login', {
      name: this.state.name,
      pwd: this.state.pwd
    }).then(res => {
      this.setState({
        loginLoading: false
      });
      if(res.data.code !== 0) {
        Toast.info(res.data.msg, 2, null, false);
        return;
      }
      Toast.info('登录成功！', 2, null, false);
      // this.props.history.push(getRedirectPath())
    }).catch( err => {
      this.setState({
        loginLoading: false
      });
    });
  }
  render() {
    return (
      <div className="login">
          <img className="login-logo" src={logo} />
          <WingBlank>
            <InputItem onChange={this.nameChange} placeholder="用户名" />
            <InputItem onChange={this.pwdChange} type="password" placeholder="密码" />
            <WhiteSpace size="lg" />
            <Button type="primary" loading={this.state.loginLoading} disabled={this.state.loginLoading} onClick={this.loginSubmit}>
              {
                this.state.loginLoading ? '登录中...' : '登录'
              }
            </Button>
            <WhiteSpace />
            <Button onClick={this.goRegister}>
              还没有帐号？我要注册
            </Button>
          </WingBlank>
      </div>
    );
  }
}

export default Login;