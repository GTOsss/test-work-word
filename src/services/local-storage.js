const getLocalStorage = key => JSON.parse(localStorage.getItem(key));

const setLocalStorage = (key, value) => localStorage.setItem(key, JSON.stringify(value));

export const updateCatalog = (id) => {
  const catalog = getLocalStorage('catalog') || [];
  setLocalStorage('catalog', [...catalog, id]);
};

export const removeFromCatalog = (id) => {
  let catalog = getLocalStorage('catalog') || [];
  catalog = catalog.filter(el => el !== id);
  setLocalStorage('catalog', catalog);
};

export const saveVocabulary = (vocabulary) => {
  setLocalStorage(vocabulary.id, vocabulary);
  updateCatalog(vocabulary.id);
};

export const removeVocabulary = (id) => {
  localStorage.removeItem(id);
  removeFromCatalog(id);
};

export const getVocabularies = () => {
  const catalog = getLocalStorage('catalog') || [];
  return catalog.map(el => getLocalStorage(el));
};
