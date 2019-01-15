import { apiGetRequest } from './requests';

export function getTimePeriods( uuid ) {
  uuid = uuid || '';

  return apiGetRequest( `time_periods/${ uuid }` ).
    then(
      timePeriods => timePeriods
    ).
    catch(
      error => error
    );
};
