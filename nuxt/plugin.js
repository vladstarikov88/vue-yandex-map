import Vue from 'vue';
import YmapPlugin from 'st-yandex-maps';

Vue.use(YmapPlugin, <%= serialize(options) %>);
