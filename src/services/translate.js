import axios from 'axios';

const key = 'dict.1.1.20180127T200157Z.89b89a80f4ee92a6.a58caab7a12e3854397966990070054c9597b7e2';
const config = {
  baseURL: 'https://dictionary.yandex.net/api/v1/dicservice.json/lookup',
};

const translate = params => axios.get('', { params: { ...params, key }, ...config });

export default translate;
