import React from 'react';
import { connect } from 'react-redux';
import groupBy from 'lodash.groupby';
import Box from './Box';

/**
* Boxelement - Reusable box-element
*/
class Boxelement extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      loading: false
    }
  }

  render() {
    if(this.state.loading) {
      return (
        <div>Laster</div>
      )
    }
    let boxes = [];

    let objects = this.props.cases.cases;
    boxes = [];
    for(let data in objects) {
        if (typeof objects[data].symbol == 'undefined'){
            continue;
        }
        let el = <Box key={data} data={objects[data]}/>
        boxes.push(el);
        if (boxes.length == 66) {
            break;
        }
    }
    return (
      <div className="panel panel-default">
        <div className="panel-body">
        <table className="table">
            { boxes }
        </table>
        </div>
      </div>
    )
  }
}

Boxelement = connect(state => state)(Boxelement)
export default Boxelement;
