import translateApi from 'services/translate';
import {
  TRANSLATIONS_GET,
  TRANSLATIONS_CLEAR,
} from 'constants';
import toggleLoading from './loading';

const get = translations => ({ type: TRANSLATIONS_GET, payload: translations });

export const clearTranslate = () => ({ type: TRANSLATIONS_CLEAR });

export const translate = (text, inputName, lang = 'ru-en') => async (dispatch) => {
  try {
    dispatch(toggleLoading(inputName, true));
    let result = await translateApi({
      lang,
      text,
    });
    result = (result && result.data && result.data.def[0]) || {};
    const translations = (result.tr && result.tr.map(el => el.text)) || [];
    dispatch(get({ id: inputName, translations }));
  } catch (e) {
    console.error(e);
  } finally {
    dispatch(toggleLoading(inputName, false));
  }
};
