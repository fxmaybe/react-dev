import React from 'react';
import { Button,InputItem,Radio, WingBlank, WhiteSpace, Toast} from 'antd-mobile';
import axios from 'axios';
import {getRedirectPath} from './../../assets/js/utils';
import logo from './../../assets/images/yy.jpg';
import './index.less';

const RadioItem = Radio.RadioItem;

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      pwd: '',
      cpwd: '',
      type: "genius",
      registerLoading: false
    }
  }
  goLogin = () => {
    this.props.history.push('/login');
  }
  niuChange = (type) => {
    console.log(type);
    this.setState({
      type
    });
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
  cpwdChange = (cpwd) => {
    this.setState({
      cpwd
    });
  }
  registerSubmit = () => {
    if(this.state.name === '') {
      Toast.info('请输入用户名', 2, null, false);
      return;
    }
    if(this.state.pwd === '') {
      Toast.info('请输入密码', 2, null, false);
      return;
    }
    if (this.state.cpwd === '') {
      Toast.info('请确认密码', 2, null, false);
      return;
    }
    if (this.state.pwd !== this.state.cpwd) {
      Toast.info('两次输入的密码不一致', 2, null, false);
      return;
    }
    this.setState({
      registerLoading: true
    });
    axios.post('./user/register', {
      ...this.state
    }).then(res => {
      this.setState({
        registerLoading: false
      });
      if(res.data.code !== 0) {
        Toast.info(res.data.msg, 2, null, false);
        return;
      }
      Toast.success('注册成功！', 2, null, false);
      this.props.history.push(getRedirectPath({
        name: this.state.name,
        type: this.state.type
      }));
    }).catch(err => {
      this.setState({
        registerLoading: false
      });
    });
  }
  render() {
    return (
      <div className="register">
          <img className="register-logo" src={logo} />
          <WingBlank>
            <InputItem placeholder="用户名" onChange={this.nameChange} />
            <InputItem type="password"  onChange={this.pwdChange} placeholder="密码" />
            <InputItem type="password"  onChange={this.cpwdChange} placeholder="确认密码" />
            <WhiteSpace />
            <RadioItem checked={this.state.type === 'genius'} onClick={() => this.niuChange('genius')}>牛人</RadioItem>
            <RadioItem checked={this.state.type === 'boss'} onClick={() => this.niuChange('boss')}>Boss</RadioItem>
            <WhiteSpace size="lg" />
            <Button type="primary" loading={this.state.registerLoading} disabled={this.state.registerLoading} onClick={this.registerSubmit}>
              {
                this.state.registerLoading ? '注册中...' : '注册'
              }
            </Button>
            <WhiteSpace />
            <Button onClick={this.goLogin }>
              已经帐号？我要登录
            </Button>
          </WingBlank>
      </div>
    );
  }
}

export default Register;