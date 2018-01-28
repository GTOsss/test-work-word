import {
  VOCABULARY_ADD,
  VOCABULARY_REMOVE,
  VOCABULARY_RENAME,
  VOCABULARY_EDIT_WORDS,
  VOCABULARIES_GET,
} from '../constants';

const initialState = [];

export default function vocabularies(state = initialState, { type, payload }) {
  switch (type) {
    case VOCABULARIES_GET:
      return payload;
    case VOCABULARY_ADD: {
      return [...state, payload];
    }
    case VOCABULARY_REMOVE:
      return state.filter(el => el.id !== payload);
    case VOCABULARY_RENAME: {
      const { id, name } = payload;
      return state.map(el => (el.id === id ? { ...el, name } : el));
    }
    case VOCABULARY_EDIT_WORDS: {
      const { id, words } = payload;
      return state.map(el => (el.id === id ? { ...el, words } : el));
    }
    default:
      return state;
  }
}
