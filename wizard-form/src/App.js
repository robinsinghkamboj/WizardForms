import React, { Component } from 'react';
import '@coreui/icons/css/coreui-icons.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './scss/style.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import Form from '../src/form';

class App extends Component {
  result = (values) => {
    console.log('result is', values);
    alert("Submit successfully!!!")
  }

  render() {
    return (
      <Provider store={store}>
        <Form onSubmit={this.result} />
      </Provider>
    );
  }
}

export default App;
