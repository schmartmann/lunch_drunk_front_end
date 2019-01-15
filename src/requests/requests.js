import {
  ROOT_URL,
  handleErrors
} from './constants';


export function apiGetRequest( route ) {
  return fetch(
    `${ ROOT_URL }/${ route }`, {
      method: 'GET',
      header: {
        'Access-Control-Allow-Origin': '*'
      }
    } ).
    then(
      response => response.json()
    ).
    then(
      response => response
    ).
    catch(
      error => {
        handleErrors( error );
      }
    );
};
