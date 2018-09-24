import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Item, Header, Icon } from 'semantic-ui-react';
import SelectedClientsSelector from '../selectors/selected_clients'

class ClientDetail extends Component {
	render() {
		let { selected_client } = this.props;
		return (
			<section className="client-details">
				<Item.Group
					key={selected_client && selected_client.contact.email}
					as="section">
					{selected_client ? (
						<Item className={this.props.className}>
							<Item.Image src={selected_client.general.avatar} />
							<Item.Content verticalAlign="middle">
								<Header size="huge">
									<h1>{selected_client.general.firstName + ' ' + selected_client.general.lastName}</h1>
								</Header>
								<div className="info">
									<p>{selected_client.job.title + ' - ' + selected_client.job.company}</p>
									<p>
										Address : {Object.keys(selected_client.address).reduce(
											(accum, cur) => accum + selected_client.address[cur] + ', ',
											''
										)}
									</p>
									<p>
										Email <Icon name="phone" /> : {selected_client.contact.email}
									</p>
									<p>
										Phone <Icon name="mail" /> : {selected_client.contact.phone}
									</p>
								</div>
							</Item.Content>
						</Item>
					) : (
						<div />
					)}
				</Item.Group>
			</section>
		);
	}
}
const mapStateToProps = (state) => ({
	selected_client: SelectedClientsSelector(state)
});
export default connect(mapStateToProps)(ClientDetail);
