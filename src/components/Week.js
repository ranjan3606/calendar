import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import _ from 'lodash';

import {uniqueID} from '../utils/utils';
import DateCell from './DateCell';

export default class Week extends Component{
	static PropTypes = {
		week: PropTypes.array.isRequired,
		extraRow: PropTypes.bool,
		daysThisMonth: PropTypes.number,
		month: PropTypes.string.isRequired,
		openModal: PropTypes.func,
		events: PropTypes.arrayOf(PropTypes.object)
	}
	static defaultProps = {}
	constructor(props) {
		super(props)
		this.state = {
			events: [],
			_actionType: '',
			_filters: this.props.filters,
		}
	}
	componentWillMount = (newProps) => {
			this.setState({
				_actionType: this.props.actionType,
				_events: this.props.events,
				_filters: this.props.filters,
			})
	}	

	renderDateCells = () => {
		const {week, daysThisMonth} = this.props; 
		let isBeginningOfMonth = week.length > 0 ? week[0].split('-')[0] < 20 : false;
		/* If It is the beginning of the month, append empty cells */
		if (week.length < 7 && isBeginningOfMonth) {
			let diff = 7 - week.length;
			for (let i = 0; i < diff; i++) {
				week.unshift("-")
			}			
		}
		return week.map((date) => {
			date = date.split('-')[0];
			return (
				<DateCell 
					month={this.props.month} 
					daysThisMonth={daysThisMonth} 
					key={uniqueID()} 
					date={date}
					openModal={this.props.openModal}
					events={this.state._events}
					newEvent={this.props.newEvent}
					filters={this.props.filters}	
					actionType={this.state._actionType}																
				/>
			)
		})
	}
  render(){
		var rowClass = classNames({
			'extra-row': this.props.extraRow, // display extra row for months with 6 weeks
			'rc-month-row': true,
		});		
    return(
      <div className={rowClass}>
				{this.renderDateCells()}
			</div>
    );
  }
}