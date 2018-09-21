import { createSelector } from 'reselect';

const clientsSelector = (state) => state.clients;
const selectedClientsSelector = (state) => state.selectedClients;

const getClients = (clients, selectedClientsIds) => {
	const selectedClients = clients.filter((client) => client.contact.email === selectedClientsIds.id);
	return selectedClients[0];
};

export default createSelector(clientsSelector, selectedClientsSelector, getClients);
