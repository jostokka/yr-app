export const REQUEST_CASES = 'REQUEST_CASES'

function requestCases() {
   return {
      type: REQUEST_CASES
   }
}

export const RECEIVE_CASES = 'RECEIVE_CASES'

function receiveCases(xml) {
   return {
      type: RECEIVE_CASES,
      cases: xml,
      receivedAt: Date.now()
   }
}

export function fetchCases() {
   return function(dispatch) {
      dispatch(requestCases()) //Request
      var xhr = new XMLHttpRequest();
      xhr.open('GET', location.protocol + '//www.tv2.no/fragments/met.php?lat='+window.position.coords.latitude+';lon='+window.position.coords.longitude+';msl=70');
      xhr.onreadystatechange = function() {
         if (xhr.readyState === 4 && xhr.status === 200) {
            dispatch(receiveCases(xhr.responseXML));
         }
      }
      xhr.send(null);
   }
}
