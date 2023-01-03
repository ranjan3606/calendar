import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {uniqueID} from '../utils/utils';
import _ from 'lodash';

import Week from './Week';

export default class Month extends Component {
	static propTypes = {
		weeks: PropTypes.arrayOf(PropTypes.array),
		month: PropTypes.string,
		openModal: PropTypes.func.isRequired,
		events: PropTypes.arrayOf(PropTypes.object),
	};
	static defaultProps = {};
	constructor(props) {
		super(props)
		this.state = {
			_events: this.props.events,
			_actionType: 0,
			_filters: this.props.filters,
		} 
	}

	componentWillReceiveProps = (newProps) => {
		if (newProps.actionType === 'create') {
			this.setState({
				_actionType: newProps.actionType,
				_events: newProps.events,
			})
		}
		if (!_.isEqual(this.state._filters, newProps.filters)) {
			this.setState({
				_filters: newProps.filters
			})
		}
		if (!_.isEqual(this.state._events, newProps.events)) {
			this.setState({
				_events: newProps.events
			})			
		}
	}
	componentDidMount = () => {
		this.setState({
			_events: this.props.events,
			_filters: this.props.filters,
			_actionType: this.props.actionType,
		}) 
	}

	renderWeeks = () => {
		let extraRow = this.props.weeks.length === 6 ? true : false;
		return this.props.weeks.map((week, index) => {
			return (
				<Week 
					extraRow={extraRow} 
					week={week} 
					key={uniqueID()}
					daysThisMonth={this.props.daysThisMonth}
					month={this.props.month}
					openModal={this.props.openModal}
					events={this.state._events}
					newEvent={this.props.newEvent}
					filters={this.state._filters}
					actionType={this.state._actionType}						
				/>
			)
		})		
	}
	render() {
		let extraRow = this.props.weeks.length === 6 ? true : false;		
		
		return (
			<div className="rc-elastic-month-view-wrapper">			
				<div className="rc-month-view">
					{this.renderWeeks()}											
				</div>
			</div>
		)
	}
}