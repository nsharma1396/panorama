import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import {URL} from './constants'
import Frame from './components/frame/'
import { itemsFetchData } from './actions/';


class App extends Component {

  componentDidMount() {
    this.props.fetchData(URL);
  }

  render() {
    return (
      <div>
        <Frame />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(itemsFetchData(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);