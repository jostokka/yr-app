import {
   REQUEST_CASES,
   RECEIVE_CASES
} from "../actions/Actions.js";

import {
   combineReducers
} from 'redux';

function cases(state = {
   isFetching: false,
   didInvalidate: false,
   cases: []
}, action) {
   switch (action.type) {
      case REQUEST_CASES:
         return Object.assign({}, state, {
            isFetching: true,
            didInvalidate: false
         });
      case RECEIVE_CASES:
         //let grid = action.cases.worksheets[0].grid;//store.getState().cases.cases.worksheets[0].grid;
         let cases = [];
         let times = action.cases.getElementsByTagName('time');
         for (var i = 0; i < times.length; i++) {
            let time = times[i];
            let loc = time.getElementsByTagName('location')[0];
            let from = new Date(time.getAttribute('from'));
            let to = new Date(time.getAttribute('to'));
            if (from.getTime() == to.getTime()) {
               cases.push({
                  from: from,
                  to: to,
                  temperature: loc.getElementsByTagName('temperature')[0].getAttribute('value'),
                  windDirection: loc.getElementsByTagName('windDirection')[0].getAttribute('name'),
                  windSpeed: loc.getElementsByTagName('windSpeed')[0].getAttribute('name'),
                  cloudiness: loc.getElementsByTagName('cloudiness')[0].getAttribute('percent')
               });
               for (var y = 0; y < times.length; y++) {
                  let timeTmp = times[y];
                  let locTmp = timeTmp.getElementsByTagName('location')[0];
                  let fromTmp = new Date(timeTmp.getAttribute('from'));
                  let toTmp = new Date(timeTmp.getAttribute('to'));
                  if (from.getTime() == fromTmp.getTime() && to.getTime()+(1000*60*60) == toTmp.getTime()) {
                      cases[cases.length-1].symbol = locTmp.getElementsByTagName('symbol')[0].getAttribute('number');
                      cases[cases.length-1].precipitation = locTmp.getElementsByTagName('precipitation')[0].getAttribute('maxvalue');
                      break;
                  }
              }
            }
         }
         return Object.assign({}, state, {
            isFetching: false,
            didInvalidate: false,
            cases: cases,
            lastUpdated: action.receivedAt
         });
      default:
         return state;
   }
}

const MainAppReducer = combineReducers({
   cases
});

export default MainAppReducer;
