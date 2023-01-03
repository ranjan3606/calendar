import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {uniqueID, months, eventTypes} from '../utils/utils';
import Modal from './Modal';

export default class SnapshotForm extends Component {
	static propTypes = {}
	constructor(props) {
		super(props)
		this.state = {
			cardName: ''
		}
	}
	handleChange = (event) => {
		this.setState({
			cardName: event.target.value
		})
	}
	handleClick = () => {
		this.props.onAddToDashboard(this.state.cardName);
		this.setState({
			cardName: '',
		})
	}
	render() {
		const {showModal, closeModal, onAddToDashboard} = this.props;
		return(
			<Modal showModal={showModal}>
				<div className="rc-popup rc-snapshot-popup">
					<div className="rc-popup-header">
		      <div style={{float: 'right'}}>x</div>				
						<div onClick={closeModal} className="rc-popup-title">
							<span className="rc-modal-title">Give this calendar a snapshot name</span>
						</div>
						<span>The name will show up in the dashboard for each snapshot card</span>
						</div>
					<div className="rc-popup-body">
						<form>
							<label>Name</label> <br/>
							<input type="text" onChange={this.handleChange} value={this.state.cardName}/>
						</form>				
					</div>
					<div className="rc-popup-footer">
						<button className="rc-button cancel" onClick={closeModal}>x Cancel</button>
						<button  className="rc-button-primary add" onClick={this.handleClick}>Add</button>
					</div>
				</div>
			</Modal>
		)
	}
}