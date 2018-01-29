const getLocalStorage = key => JSON.parse(localStorage.getItem(key));

const setLocalStorage = (key, value) => localStorage.setItem(key, JSON.stringify(value));

export const addToCatalog = (id) => {
  const catalog = getLocalStorage('catalog') || [];
  if (catalog.indexOf(id) === -1) {
    setLocalStorage('catalog', [...catalog, id]);
  }
};

export const removeFromCatalog = (id) => {
  let catalog = getLocalStorage('catalog') || [];
  catalog = catalog.filter(el => el !== id);
  setLocalStorage('catalog', catalog);
};

export const saveVocabulary = (vocabulary) => {
  setLocalStorage(vocabulary.id, vocabulary);
  addToCatalog(vocabulary.id);
};

export const removeVocabulary = (id) => {
  localStorage.removeItem(id);
  removeFromCatalog(id);
};

export const getVocabularies = () => {
  const catalog = getLocalStorage('catalog') || [];
  return catalog.map(el => getLocalStorage(el));
};
