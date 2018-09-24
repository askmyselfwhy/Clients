import React, { Component } from 'react';
import { Item } from 'semantic-ui-react';
class ListItem extends Component {
	render() {
		let { data, onClick } = this.props;
		return (
			<Item
				className={this.props.className}
				onClick={(e) => onClick(data.contact.email)}>
				<Item.Image
					size="tiny"
					src={data.general.avatar} />
				<Item.Content verticalAlign="middle">
					<Item.Header as="h2">{data.general.firstName + ' ' + data.general.lastName}</Item.Header>
					<Item.Description>{data.job.title}</Item.Description>
				</Item.Content>
			</Item>
		);
	}
}
export default ListItem;
