import React from 'react';
import { Button} from 'antd-mobile';
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
    axios.get('/data?name=xiaoming').then(res => {
      this.setState({
        userInfo: res.data
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
      <div className="App">
        <div style={{padding: '0 10px'}}>
          <h1 style={{textAlign: 'center'}}>Hello {this.state.userInfo.name}!{this.props.num}</h1>
          <Button type="primary" onClick={this.addNum}>
            加1
          </Button>
          <br />
          <Button onClick={this.minusNum}>
            减1
          </Button>
        </div>
      </div>
    );
  }
}

export default Test;