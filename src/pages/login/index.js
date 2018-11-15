import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button, WingBlank, InputItem, WhiteSpace} from 'antd-mobile';
import './index.less';

@withRouter
class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  goRegister= () => {
    this.props.history.push('/register');
  }

  render() {
    return (
      <div className="login">
          <img className="login-logo" src="https://res.udb.duowan.com/thirdlogin/x/images/open_oauth_yylogo.png?v20181106" />
          <WingBlank>
            <InputItem placeholder="用户名" />
            <InputItem type="password" placeholder="密码" />
            <WhiteSpace size="lg" />
            <Button type="primary">
              登录
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