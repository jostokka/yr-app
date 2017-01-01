import React from 'react';
import { connect } from 'react-redux';
import { setCurrentView, setFilters } from '../actions/Actions';

class Box extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    let days = ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"];
    if(this.props.data.title == "") {
      this.props.data.title = "...";
    }
    let imgCode = (this.props.data.symbol < 10 ? '0' : '')+this.props.data.symbol;
    if (this.props.data.symbol == "44" || this.props.data.symbol == "7"){
        imgCode += 'd';
    } else if (this.props.data.symbol == "3") {
        if (this.props.data.from.getHours() > 18 || this.props.data.from.getHours() < 10){
            imgCode = 'mf/'+imgCode+'n.17';
        } else {
            imgCode += 'd';
        }

    } else if (this.props.data.symbol == 2) {
        if (this.props.data.from.getHours() > 18 || this.props.data.from.getHours() < 10){
            imgCode = 'mf/'+imgCode+'n.14';
        } else {
            imgCode += 'd';
        }

    } else if (this.props.data.symbol == "1") {
        if (this.props.data.from.getHours() > 18 || this.props.data.from.getHours() < 10){
            imgCode = 'mf/'+imgCode+'n.17';
        } else {
            imgCode += 'd';
        }

    }

      return (
        <tr>
         <td>{days[this.props.data.from.getDay()]} - {(this.props.data.from.getHours() < 10 ? '0':'')+this.props.data.from.getHours()}:00</td>
         <td><img src={"https://symbol.yr.no/grafikk/sym/b38/"+imgCode+".png"}/></td>
         <td className={this.props.data.temperature < 0 ? 'cold-temperature':''}>{this.props.data.temperature}°</td>
         <td>0 - {this.props.data.precipitation} mm</td>
        </tr>
    );
  }
}
Box = connect(state => state)(Box)
export default Box;
