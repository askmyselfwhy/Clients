import * as action_types from '../actions/types';

function clients(state = [], event) {
	switch (event.type) {
		case action_types.UPLOAD_CLIENTS:
			return [
				...event.payload
			];
		default:
			return state;
	}
}

export default clients;
