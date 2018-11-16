import React from 'react';
import { Button, WingBlank} from 'antd-mobile';
import { connect } from 'react-redux';
import {testAdd, testMinus} from './../../redux/action';

import axios from 'axios';

@connect(
  state => ({
    num: state.counter.num
  }),
  {
    testAdd,
    testMinus
  }
)
class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {

      }
    }
  }
  componentWillMount() {
    axios.get('/user/info?name=xiaoming').then(res => {
      this.setState({
        userInfo: res.data.data
      });
    });
  }
  addNum = () => {
    this.props.testAdd();
  }
  minusNum = () => {
    this.props.testMinus();
  }
  render() {
    return (
      <div className="test">
        <WingBlank>
          <h1 style={{textAlign: 'center'}}>Hello {this.state.userInfo.name}!{this.props.num}</h1>
          <Button type="primary" onClick={this.addNum}>
            加1
          </Button>
          <br />
          <Button onClick={this.minusNum}>
            减1
          </Button>
        </WingBlank>
      </div>
    );
  }
}

export default Test;