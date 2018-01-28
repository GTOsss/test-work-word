import {
  VOCABULARY_ADD,
  VOCABULARY_EDIT_WORDS,
  VOCABULARY_REMOVE,
  VOCABULARY_RENAME,
  VOCABULARIES_GET,
} from 'constants';
import {
  saveVocabulary,
  removeVocabulary,
  getVocabularies,
} from 'services/local-storage';

const rename = (id, name) => ({ type: VOCABULARY_RENAME, payload: { id, name } });
const add = () => ({ type: VOCABULARY_ADD });
const remove = id => ({ type: VOCABULARY_REMOVE, payload: id });
const editWords = (id, words) => ({ type: VOCABULARY_EDIT_WORDS, payload: { id, words } });
const getAll = vocabularies => ({ type: VOCABULARIES_GET, payload: vocabularies });

export const vocabularyEditWords = (id, words) => async (dispatch, getState) => {
  const { vocabularies } = getState();
  saveVocabulary({ ...vocabularies.find(el => el.id === id), words });
  dispatch(editWords(id, words));
};

export const vocabularyRename = (id, name) => async (dispatch, getState) => {
  const { vocabularies } = getState();
  saveVocabulary(vocabularies.find(el => el.id === id));
  dispatch(rename(id, name));
};

export const vocabularyRemove = id => async (dispatch) => {
  removeVocabulary(id);
  dispatch(remove(id));
};

export const vocabularyAdd = () => async (dispatch) => {
  add({
    id: shortid.generate(),
    name: 'New vocabulary',
    words: [],
  });
  dispatch(add());
};

export const vocabulariesGet = () => async (dispatch) => {
  const vocabularies = getVocabularies();
  dispatch(getAll(vocabularies));
};
