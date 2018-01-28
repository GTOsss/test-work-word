export const getLocalStorage = key => JSON.parse(localStorage.getItem(key));

export const setLocalStorage = (key, value) => localStorage.setItem(key, JSON.stringify(value));

export const updateCatalog = (id, remove = false) => {
  const catalog = getLocalStorage('catalog') || [];
  const isAlreadyExist = catalog.some(el => el === id);
  if (!isAlreadyExist) {
    setLocalStorage('catalog', [...catalog, id]);
  } else if (isAlreadyExist && remove) {
    setLocalStorage('catalog', catalog.filter(el => el !== id));
  }
};

export const saveVocabulary = (vocabulary) => {
  setLocalStorage(vocabulary.id, vocabulary);
  updateCatalog(vocabulary.id);
};

export const removeVocabulary = (id) => {
  localStorage.removeItem(id);
  updateCatalog(id, true);
};

export const getVocabularies = () => {
  const catalog = getLocalStorage('catalog') || [];
  return catalog.map(el => getLocalStorage(el));
};
