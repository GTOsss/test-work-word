import {
  TRANSLATIONS_GET,
  TRANSLATIONS_CLEAR,
} from '../constants';

const initialState = [];

export default function translations(state = initialState, { type, payload }) {
  switch (type) {
    case TRANSLATIONS_GET: {
      const filtered = state.filter(el => el.id !== payload.id);
      return [...filtered, payload];
    }
    case TRANSLATIONS_CLEAR:
      return [];
    default:
      return state;
  }
}
