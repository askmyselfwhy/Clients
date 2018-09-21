import * as action_types from '../actions/types';

function selectedClients(state = {}, event) {
	switch (event.type) {
		case action_types.SET_ACTIVE_CLIENT:
			return {
				id: event.payload
			};
		default:
			return state;
	}
}

export default selectedClients;
