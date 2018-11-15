import React from 'react';
import { Button, WingBlank} from 'antd-mobile';


class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="home">
          <WingBlank>
            <h1 style={{textAlign: 'center'}}>首页</h1>
          </WingBlank>
      </div>
    );
  }
}

export default Home;