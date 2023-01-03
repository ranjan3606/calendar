import React, {Component} from 'react';
import classNames from 'classnames';

const Modal = (props) => {
	let modalClass = classNames({
		'rc-popup-background': true,
		'show': props.showModal,
	})
	return(
    <div 
      name="rc-popup-background show"
      className={modalClass}
      ref={(el) => {this.popOver = el}}
    >	
			{props.children}
		</div>
	)
}
export default Modal;