import { LOADING_TOGGLE } from 'constants';

const toggleLoading = (name, value) => ({ type: LOADING_TOGGLE, payload: { [name]: value } });

export default toggleLoading;
