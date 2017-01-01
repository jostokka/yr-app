import React from 'react';
import { connect } from 'react-redux';
//import groupBy from 'lodash.groupby';

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
        <footer className="footer">
            <p>© 2016 JNS</p>
        </footer>
    )
  }
}
Footer = connect(state => state)(Footer)
export default Footer;
