import { apiGetRequest } from './requests';

export function getIngredients( uuid ) {
  uuid = uuid || '';

  return apiGetRequest( `ingredients/${ uuid }` ).
    then(
      ingredients => ingredients
    ).
    catch(
      error => error
    );
};
