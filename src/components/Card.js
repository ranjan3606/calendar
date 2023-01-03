import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import {defaultEvents, colorMap} from '../utils/utils';

export default class Card extends Component {
	static propTypes = {
		onChangeView: PropTypes.func,
		events: PropTypes.arrayOf(PropTypes.object),
		filters: PropTypes.object,
		applyFilters: PropTypes.func
	}	
	constructor(props) {
		super(props)
		this.state={
			_filters: props.filters,
		}
	}

	renderItems = () => {
		return this.props.events.map((event, index) => {
			return(
				<div key={index} className="rc-event-list-item">
					<span style={{backgroundColor: colorMap[event.type], height: '100%', width: '5px'}}>
					</span>
					<div className="rc-event-title">
						{event.name}
					</div>
					<div className="rc-event-date" style={{fontSize: 'xx-small'}}>
						{event.month} {event.date}
					</div>
					<div className="rc-event-time" style={{fontSize: 'xx-small'}}>
						{event.start_hour}:{event.start_minute}{event.start_amPm}{' to '} {event.end_hour}:{event.end_minute}{event.end_amPm}
					</div>					
				</div>
		  )
		}) 
	}
	handleClick = () => {
		this.props.onChangeView();
		this.props.applyFilters(this.state._filters);
	}
	render(){
		const {onChangeView, title, deleteCard} = this.props;
		return(
			<div style={{display: 'inline-block'}}>
				<div className="rc-snap-shot-card">	
					<div className="rc-card-header">
						<span className="title">{title}</span>
						<span onClick={() => deleteCard(title)}>X</span>				
					</div>
					<div className="rc-card-body-section">
						{this.renderItems()}
					</div>
					<div className="rc-card-footer">
						<span onClick={this.handleClick}>
							View all in Calendar
						</span>
					</div>
				</div>
			</div>
		)
	}
}