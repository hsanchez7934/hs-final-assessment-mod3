import * as actions from '../actions';
import membersArray from './mockData.js';

describe(`Actions units testing`, () => {
  beforeEach(() => {

  });

  test(`gotData action creator should return
        array and type`, () => {
          const data = membersArray;

          const expected = actions.gotData(data);
      });
});
