import { apiGetRequest } from './requests';

export function getMeals() {
  return apiGetRequest( '/meals' ).
    then(
      meals => {
        console.log( meals );
      }
    );
};
