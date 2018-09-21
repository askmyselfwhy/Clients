import React, { Component } from 'react';
import { connect } from 'react-redux';
import Sidebar from './components/Sidebar';
import ClientDetail from './components/ClientDetail';
import { fetchClients } from './actions/';

class App extends Component {
	componentDidMount() {
		fetch(`${process.env.REACT_APP_API_URL}/clients.json`, {
			method: 'GET'
		})
			.then((response) => response.json())
			.then((json) => this.props.upload(json));
	}
	render() {
		return (
			<div className="App">
				<Sidebar/>
				<ClientDetail />
			</div>
		);
	}
}
const mapDispatchToProps = (dispatch) => ({
	upload: (clients) => dispatch(fetchClients(clients))
});
export default connect(null, mapDispatchToProps)(App);
