import React from 'react';
import { connect } from 'react-redux';

class Top extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
        <div className="header clearfix">
          <h3 className="text-muted">Sludd.no</h3>
        </div>
    )
  }
}
Top = connect(state => state)(Top)
export default Top;
