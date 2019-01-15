import { apiGetRequest } from './requests';

export function getMeals( timePeriodUuid, mealUuid = '' ) {
  return apiGetRequest( `time_periods/${ timePeriodUuid }/meals/${ mealUuid }` ).
    then(
      meals => meals
    ).
    catch(
      error => error
    );
};
