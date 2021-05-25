import { loadYmap } from 'st-yandex-maps';

export default {
  async mounted() {
    const settings = { lang: 'en_US' };
    await loadYmap(settings);
    console.log(ymaps); // здесь доступен весь функционал ymaps
  },
};
