import { combineReducers } from 'redux';
import clients from './reducer_clients';
import selectedClients from './reducer_selectedClients';

export default combineReducers({clients, selectedClients});
