import axios from 'axios';
import {
	CALL_USER
} from './types';

export const callUser = Number => dispatch => {
	axios.get(`/callUser/${Number}`, {
		headers: {'Content-Type': 'application/json'}
	})
	.then(res => {
		dispatch({
			type: CALL_USER,
		});
	})
	.catch(err => {
		console.error(err);
	})
};
