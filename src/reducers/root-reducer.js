import { combineReducers } from 'redux';
import { gotData } from './gotdatareducer';
import { swornMembers } from './swornmembersreducer';


const rootReducer = combineReducers({
  gotData,
  swornMembers
});


export default rootReducer;
