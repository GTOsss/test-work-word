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
import shortid from 'shortid';

const rename = (id, name) => ({ type: VOCABULARY_RENAME, payload: { id, name } });
const add = vocabulary => ({ type: VOCABULARY_ADD, payload: vocabulary });
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
  const newVocabulary = {
    id: shortid.generate(),
    name: 'New vocabulary',
    words: [],
  };
  saveVocabulary(newVocabulary);
  dispatch(add(newVocabulary));
};

export const vocabulariesGet = () => async (dispatch) => {
  const vocabularies = getVocabularies();
  dispatch(getAll(vocabularies));
};
