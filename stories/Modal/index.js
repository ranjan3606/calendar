import React from 'react';
// import { App } from '../../src';
import Modal from '../../src/components/Modal';
import '../../src/stylesheets/main.css';
import SnapshotForm from '../../src/components/SnapshotForm';
function onAddEvent() {
	alert('event added!')
}
const ModalEx = () => (
	<Modal onAddEvent={onAddEvent} showModal={true}>
		<SnapshotForm/>
	</Modal>
);

export default ModalEx;