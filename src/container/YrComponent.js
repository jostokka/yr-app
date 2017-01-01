import React from 'react';
import { Provider, connect } from 'react-redux';
import Top from '../components/Top';
import Footer from '../components/Footer';
import Boxelement from '../components/Boxelement';
import groupBy from 'lodash.groupby';
import store from '../stores/Store';
import { fetchCases } from '../actions/Actions';

class YrComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    store.dispatch(fetchCases());
    store.subscribe(() => {
    });
  }
  render () {
    return (
      <Provider store={store}>
      <div id="yr_app" className="container">
            <Top/>
            <Boxelement/>
            <Footer/>
      </div>
      </Provider>
    )
  }
}

export default YrComponent;
