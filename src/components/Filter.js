import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {uniqueID, colorMap, eventTypes} from '../utils/utils';

export default class Filter extends Component {
	static propTypes = {
		handleSelect: PropTypes.func,
		filters: PropTypes.object
	};
	static defaultProps = {};
	constructor(props) {
		super(props)
	}
	handleInputChange = (event) => {
		event.preventDefault();
		const target = event.target
		const name = target.accessKey;
		this.props.handleSelect(name);
	}
	renderFilterOptions = () => {
		return eventTypes.map((option) => {
			let color;

			this.props.filters[option] ? color = colorMap[option] : color = 'white';
			let spanStyle = {
				background: colorMap[option],
				height: '88%',
				width: '6px',
			}
			return(
				<div 
					onClick={this.handleInputChange}
					name={option}
					key={option} className="rc-filter-list-item"
				>
				<span style={spanStyle}></span>
					{option}
					<span accessKey={option} className="rc-check-square" style={{backgroundColor: color}}></span>
				</div>
			)
		})
	}
  render() {
		const {openModal} = this.props;
    return (
			<div className="rc-filter">
				<span className="rc-title-secondary">Show</span>
				<div className="rc-filter-list-wrapper">
					{this.renderFilterOptions()}
				</div>
				<div className="rc-filter-bottom-wrapper">
					<button onClick={openModal}className="rc-button-primary">Add Events To Dashboard</button>
				</div>
			</div>
    );
  }
}
