import { apiGetRequest } from './requests';

export function getMeals( timePeriodUuid, mealUuid ) {
  mealUuid = mealUuid || '';

  const url = `time_periods/${ timePeriodUuid }/meals/${ mealUuid }`;

  return apiGetRequest( url ).
    then(
      meals => meals
    ).
    catch(
      error => error
    );
};

export function shuffleMeals( timePeriodUuid, mealUuid ) {
  var param = mealUuid ? `?uuid=${ mealUuid }` : '';

  const url = `time_periods/${ timePeriodUuid }/meals/shuffle${ param }`;

  return apiGetRequest( url ).
    then(
      meals => meals
    ).
    catch(
      error => error
    );
};
