import React from 'react';
import './app.less';

class App extends React.Component {
    render() {
      return (
          <div>
            {
              this.props.children
            }
          </div>     
      );
    }
}

export default App;