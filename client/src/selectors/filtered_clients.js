import { createSelector } from 'reselect';

const depthSearch = (obj, filterStr) => {
	let keys = Object.keys(obj);
	let keysArray = [ ...keys ].filter((key) => {
		let newObj = obj[key];
		return newObj instanceof Object ? depthSearch(newObj, filterStr) : newObj.includes(filterStr);
	});
	return keysArray.length > 0;
};

const clientsSelector = (state) => state.clients;
const filterSelector = (state) => state.filter;

const getClients = (clients, filterStr) => {
	return [ ...clients ].filter((item) => depthSearch(item, filterStr));
};
export default createSelector(
	clientsSelector,
	filterSelector,
	getClients
);