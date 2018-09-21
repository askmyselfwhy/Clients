import * as action_types from './types'

export const fetchClients = (clients) => {
 return {
    type: action_types.UPLOAD_CLIENTS,
    payload: clients
  }
}
export const setActiveClient = (id) => {
  return {
    type: action_types.SET_ACTIVE_CLIENT,
    payload: id
  }
}