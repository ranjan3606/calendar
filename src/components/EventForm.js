import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {uniqueID, months, eventTypes} from '../utils/utils';
import Modal from './Modal';
export default class EventForm extends Component {
	static PropTypes = {
		daysThisMonth: PropTypes.number,
		showModal: PropTypes.bool,
		closeModal: PropTypes.func,
		date: PropTypes.string,		
		onUpdateEvent: PropTypes.func.isRequired,
		eventKey: PropTypes.string,
		actionType: PropTypes.string,
		currentEventItem: PropTypes.object,
		dateClicked: PropTypes.string.isRequired, // is the current date of the clicked Cell
	};
	static defaultProps = {};
	constructor(props) {
		super(props)
		this.state = {
			name: this.props.name,
			month: this.props.month, // default this to props
			date: this.props.dateClicked,
			type: 'Company Events',
			start_hour: 8,
			start_minute: '30',
			start_amPm: 'AM',
			end_hour: '9',
			end_minute: '30',
			end_amPm: 'AM',
			key: this.props.key || null,
		}
	}
	handleChange = (event) => {
		let attribute = event.target.name;
		this.setState({
			[attribute]: event.target.value,
		})
		event.preventDefault();
	}
	handleSave = () => {
		this.setState({
			name: ''
		}) 
		let isEditing = this.props.eventKey;
		if (isEditing) {
			this.props.onUpdateEvent(this.props.eventKey, 'edit', this.state);
		} else {
			this.props.onUpdateEvent(null, 'create', this.state);
		}
		this.setState({
			name: '',
		})
	}
	renderMonths = () => {
		let monthCopy = months.slice();
		monthCopy.shift();
		return monthCopy.map((month) => {
			return <option key={month}>{month}</option>
		})
	}
	renderDates = () => {
		/*FILL THE NUM OF DATES WITH */
		let numDates = 30; // fill this with the number of dates from props
		let days = new Array(numDates).fill(1); // no calendar view yet
		return days.map((nullVal, index) => {
			return <option key={uniqueID()}>{index + 1}</option>
		})
	}
	renderHours = () => {
		let hours = new Array(12).fill(null);
		return hours.map((nullVal, index) => {
			return <option key={uniqueID()}>{index + 1}</option>
		})
	}
	renderMinutes = () => {
		let minutes = ['00', '10', '20', '30', '40', '50'];
		return minutes.map((minute) => {
			return <option key={uniqueID()}>{minute}</option>
		})
	}
	renderEventTypes = () => {
		return eventTypes.map((eventType) => {
			return <option key={uniqueID()}>{eventType}</option>
		})
	}
	componentWillReceiveProps = (nextProps) => {
		this.setState({
			date: nextProps.dateClicked,
		})
		if (nextProps.eventKey) {
			this.setState({
				_eventKey: nextProps.eventKey,
				type: nextProps.currentEventItem.type,
				date: nextProps.dateClicked,
			})
		}
		if (nextProps.name == this.state.name) {
			this.setState({
				name: '',
				date: nextProps.dateClicked,
			})
		}
		if (nextProps.month !== this.state.month) {
			this.setState({
				month: nextProps.month,
				date: nextProps.dateClicked,
			})
		}
		if (nextProps.dateClicked !== this.state.date && nextProps.name === '') {
				this.setState({
					date: nextProps.dateClicked,
					name: '',
				})	
		} else if (nextProps.dateClicked !== this.state.date || nextProps.name !== this.state.name) {
			this.setState({
				date: nextProps.dateClicked,
				name: nextProps.name,
			})			
		}
	}
	handleDelete = () => {
		this.props.closeModal();
		this.props.onUpdateEvent(this.state.eventKey, 'delete');
	}
	render() {
		const {onAddEvent, closeModal} = this.props;
		let modalClass = classNames({
			'rc-popup-background': true,
			'show': this.props.showModal,
		})
		return(
			<Modal showModal={this.props.showModal}>
				<div className="rc-popup">
					<div onClick={closeModal}className="rc-popup-header">
						<i style={{right: '0', position: 'absolute', cursor: 'pointer'}} className="material-icons clear">clear</i>
						<div className="rc-popup-title">
							<span className="rc-modal-title">Event</span>
						</div>
						<span>
							Event your event information here
						</span>
					</div>
					{/*Body*/}
				<div className="rc-popup-body">
					<div className="rc-popup-block">
						<span>Event type</span>
						<select value={this.state.type} name="type" onChange={this.handleChange}>
							{this.renderEventTypes()}
						</select>
					</div>					
					<div className="rc-popup-block">
						<span>Name</span>
						<input type="text" value={this.state.name} name="name" onChange={this.handleChange} autoFocus/>
					</div>				
					<div className="rc-popup-block-wrapper">
						<div className="rc-popup-block time">
							<span>Month</span>
							<select value={this.state.month} name="month" onChange={this.handleChange}>
								{this.renderMonths()}
							</select>
						</div>
						<div className="rc-popup-block">
							<span>Date</span>
							<select value={this.state.date} name="date" onChange={this.handleChange}>
								{this.renderDates()}
							</select>
						</div>	
					</div>						
					<div className="rc-popup-block-wrapper">
						<div className="rc-popup-block time">
							<span>Hour</span>
							<select value={this.state.start_hour} name="start_hour" onChange={this.handleChange}>
								{this.renderHours()}
							</select>
						</div>
						<div className="rc-popup-block time">
							<span>Minute</span>
							<select 
								name="start_minute" 
								value={this.state.start_minute} 
								onChange={this.handleChange} 								
							>
								{this.renderMinutes()}
							</select>
						</div>
						<div className="rc-popup-block am-pm">										
							<select name="start_amPm" onChange={this.handleChange} value={this.state.start_amPm}>
								<option>{'AM'}</option>
								<option>{'PM'}</option>							
							</select>
						</div>	
						<span className="rc-popup-block to"> to </span>
						<div className="rc-popup-block time">
							<span>Hour</span>
							<select value={this.state.end_hour} name="end_hour" onChange={this.handleChange}>
								{this.renderHours()}
							</select>
						</div>
						<div className="rc-popup-block time">
							<span>Minute</span>
							<select 
								name="end_minute" 
								value={this.state.end_minute} 
								onChange={this.handleChange} 								
							>
								{this.renderMinutes()}
							</select>
						</div>
						<div className="rc-popup-block am-pm">										
							<select name="end_amPm" onChange={this.handleChange} value={this.state.end_amPm}>
								<option>{'AM'}</option>
								<option>{'PM'}</option>							
							</select>
						</div>																
					</div>
				</div>
					{/*Footer*/}					
					<div className="rc-popup-footer">
						{this.props.actionType === 'edit' && 
							<button className="rc-button cancel" 
								onClick={this.handleDelete}> 
								Delete 
							</button>
						}
						<button className="rc-button cancel" onClick={closeModal}> x Cancel </button>
						<button className="rc-button-primary add" onClick={this.handleSave}>Save</button>
					</div>
				</div>
			</Modal>
		)
	}
}