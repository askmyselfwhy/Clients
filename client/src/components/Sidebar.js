import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Item, Input, Loader } from 'semantic-ui-react';
import ListItem from './ListItem';
import { setActiveClient } from '../actions';
import FilteredClientsSelector from '../selectors/filtered_clients'

class Sidebar extends Component {
	state = {
		filter: ''
	};
	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};
	itemClick = (value) => {
		this.props.setClient(value);
	};

	render() {
		let { clients, selected_client } = this.props;
		let filter = this.state.filter;
		let filteredClients = clients ? filteredClients = FilteredClientsSelector({
			clients,
			filter
		}) : [] ;
		return (
			<aside className="sidebar">
				<Input
					name="filter"
					onChange={this.handleChange}
					icon={{ name: 'search', circular: true }}
					placeholder="Search..."
					fluid
				/>
				{clients && clients.length > 0 ?  (
					<Item.Group className="list">
						{filteredClients.map((item, index) => (
							<ListItem
								key={item.contact.email}
								className={selected_client && selected_client.id === item.contact.email ? 'active' : ''}
								data={item}
								onClick={this.itemClick}
							/>
						))}
					</Item.Group>
				) : (
					<Loader active inline="centered">Loading clients</Loader>
				)}
			</aside>
		);
	}
}

const mapStateToProps = (state) => ({
	clients: state.clients,
	selected_client: state.selectedClients
});
const mapDispatchToProps = (dispatch) => ({
	setClient: (id) => dispatch(setActiveClient(id))
});
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
