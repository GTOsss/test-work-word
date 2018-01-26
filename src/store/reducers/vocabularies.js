import {
  VOCABULARY_ADD,
  VOCABULARY_REMOVE,
} from '../constants';

const initialState = [];

export default function vocabularies(state = initialState, { type, payload }) {
  switch (type) {
    case VOCABULARY_ADD:
      return { ...state, ...payload };
    default:
      return state;
  }
}
