import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button,InputItem,Radio, WingBlank, WhiteSpace} from 'antd-mobile';
import './index.less';

const RadioItem = Radio.RadioItem;

@withRouter
class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "genius"
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
  render() {
    return (
      <div className="register">
          <img className="register-logo" src="https://res.udb.duowan.com/thirdlogin/x/images/open_oauth_yylogo.png?v20181106" />
          <WingBlank>
            <InputItem placeholder="用户名" />
            <InputItem type="password" placeholder="密码" />
            <InputItem type="password" placeholder="确认密码" />
            <RadioItem checked={this.state.type === 'genius'} onClick={() => this.niuChange('genius')}>牛人</RadioItem>
            <RadioItem checked={this.state.type === 'boss'} onClick={() => this.niuChange('boss')}>Boss</RadioItem>
            <WhiteSpace size="lg" />
            <Button type="primary">
              注册
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