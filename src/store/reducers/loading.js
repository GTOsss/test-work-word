import { LOADING_TOGGLE } from '../constants';

const initialState = { };

export default function loading(state = initialState, { type, payload }) {
  switch (type) {
    case LOADING_TOGGLE:
      return { ...state, ...payload };
    default:
      return state;
  }
}
